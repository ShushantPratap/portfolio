import React, { useEffect, useMemo, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../../config/config";
import skills from "../../skills";
import projects from "../../../projects/projects";
import { Volume2, Square } from "lucide-react";
import ReactMarkdown from "react-markdown";

const MODEL_ID = "gemini-2.5-flash";

function ChatBot({ name = "Your Name" }) {
  // --- 1. नया छोटा सिस्टम प्रॉम्प्ट ---
  // इसमें अब 'projects.map' नहीं है। यह ~4500 टोकन से ~200-300 टोकन का हो गया है।
  const portfolioSystemPrompt = `You are the AI assistant for ${name}’s developer portfolio website. Your job is to help visitors quickly explore projects, tech stack, skills and experience.
  Core behavior
  - Be concise: 1–4 sentences per answer.
  - Be friendly, confident, and developer‑savvy.
  - Answer in the user’s language. Default to English.
  
  IMPORTANT: When a user asks about a specific project, a list of projects, or project details, you MUST use the 'getProjectDetails' tool. Do not answer from memory or say you don't have the info. Use the tool.
  Each project item use:
    # Title
    1‑line summary
    ## (tech)
    [Live Demo](Live)
    [View GitHub](github)

  Calls to action (use when relevant)
  - “View live demo” → project live link
  - “View code on GitHub” → project GitHub link
  - “Contact Shushant” → use contact: email
  - “Download resume” → use contact: resume
  - “Github profile” → [https://github.com/ShushantPratap](https://github.com/ShushantPratap)

  Knowledge Base (do not alter)
  meta:
    owner: "${name}"
    contact:
      email: "sunnypratap912@gmail.com"
      resume: "currently unavailable"

  skills: 
    ${skills.map(category =>`
      ${category.category}: ${category.items.map(item => item).join(", ")}
    `).join("\n")}

    projects title: [${projects.map(project => project.title).join(", ")}]

  `; // (हमने यहाँ से 'projects' हटा दिया है, लेकिन 'skills' रख सकते हैं)

  // --- 2. टूल्स को परिभाषित करें ---
  const tools = [
    {
      functionDeclarations: [
        {
          name: "getProjectDetails",
          description:
            "Get detailed information about a specific project (like summary, tech, links) or a list of all projects.",
          parameters: {
            type: "object",
            properties: {
              projectName: {
                type: "string",
                description:
                  "The name or ID of the project. If the user asks for 'all projects', leave this empty.",
              },
            },
          },
        },
      ],
    },
  ];

  // --- 3. लोकल हेल्पर फ़ंक्शन (यह API कॉल नहीं करता) ---
  // यह फ़ंक्शन आपके 'projects.js' से डेटा ढूँढता है।
  function findProjectData(projectName) {
    console.log("Helper function running for:", projectName);
    if (!projectName || projectName === "") {
      // अगर कोई नाम नहीं दिया गया है, तो सभी प्रोजेक्ट्स के नाम भेजें
      const allTitles = projects.map((p) => p.title);
      return { projectsList: allTitles };
    }

    const nameLower = projectName.toLowerCase();
    const project = projects.find(
      (p) =>
        p.id.toLowerCase() === nameLower ||
        p.title.toLowerCase().includes(nameLower)
    );

    if (project) {
      // सिर्फ वही डेटा भेजें जिसकी ज़रूरत है
      return {
        title: project.title,
        summary: project.description,
        tech: project.technologies,
        links: {
          github: project.githubLink,
          live: project.liveLink,
        },
      };
    } else {
      return { error: `Project '${projectName}' not found.` };
    }
  }

  // --- (स्टेट्स और TTS फ़ंक्शंस - कोई बदलाव नहीं) ---
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "model",
      text: `Hey! I'm the AI assistant for ${name}'s portfolio. Ask me about projects, skills, or experience.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const [availableVoices, setAvailableVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const speakMessage = (text, langCode = "hi-IN") => {
    if (!("speechSynthesis" in window) || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = availableVoices.find((v) => v.lang.startsWith(langCode));
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }
    window.speechSynthesis.speak(utterance);
  };

  // --- (API और चैट सेशन - 'tools' के साथ अपडेट किया गया) ---
  const genAI = useMemo(
    () => new GoogleGenerativeAI(config.geminiApiKey),
    []
  );

  const model = useMemo(
    () => genAI.getGenerativeModel({ model: MODEL_ID }),
    [genAI]
  );

  const chat = useMemo(
    () =>
      model.startChat({
        systemInstruction: {
          role: "system",
          parts: [{ text: portfolioSystemPrompt }],
        },
        history: [],
        tools: tools, // <--- ⭐ यह रहा मुख्य बदलाव
      }),
    [model, portfolioSystemPrompt] // 'name' पर निर्भरता हटा दी गई क्योंकि प्रॉम्प्ट पहले ही बन चुका है
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" })
    // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  }

  // --- 4. `sendMessage` (पूरी तरह से नया लॉजिक) ---
  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage = { id: crypto.randomUUID(), role: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // 1. यूज़र का मैसेज भेजें
      const result = await chat.sendMessage(text);
      let response = result.response;

      // 2. चेक करें कि AI ने फ़ंक्शन कॉल का अनुरोध किया है या नहीं
      const functionCalls = response.functionCalls();

      if (functionCalls && functionCalls.length > 0) {
        // --- यह एक फ़ंक्शन कॉल है ---
        console.log("AI ने टूल का अनुरोध किया:", functionCalls[0].name);

        const call = functionCalls[0];
        let functionResult;

        // 3. लोकल फ़ंक्शन चलाएँ
        if (call.name === "getProjectDetails") {
          const projectName = call.args.projectName;
          const projectData = findProjectData(projectName);
          
          functionResult = {
            functionResponse: {
              name: "getProjectDetails",
              // AI को बताने के लिए डेटा को JSON में बदलें
              response: { projectData: JSON.stringify(projectData) },
            },
          };
        } else {
          // अज्ञात टूल
          functionResult = {
            functionResponse: {
              name: call.name,
              response: { error: "Unknown function" },
            },
          };
        }

        // 4. फ़ंक्शन का रिजल्ट वापस AI को भेजें
        console.log("प्रोजेक्ट डेटा AI को वापस भेजा जा रहा है...");
        const result2 = await chat.sendMessage([functionResult]);
        response = result2.response; // AI का अंतिम जवाब प्राप्त करें
      }

      // 5. अंतिम टेक्स्ट जवाब को UI में दिखाएँ
      const reply = response.text().trim();
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "model", text: reply || "…" },
      ]);
      
      // अब टोकन काउंट बहुत कम होना चाहिए
      console.log("टोकन उपयोग:", response.usageMetadata);

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "model",
          text: "Sorry, I ran into an issue. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // --- (JSX रेंडरिंग - कोई बदलाव नहीं) ---
  return (
    <div className="chat">
      <div className="chat-window">
        {messages.map((m) => (
          <div key={m.id} className={`bubble ${m.role}`}>
            {m.role === "model" && (
              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/30x30/000000/FFFFFF/png?text=SP"
                    alt=""
                    className="rounded-full mx-1"
                  />
                  <h3>Assistant</h3>
                </div>
                <button
                  className="bg-gray-900 p-2 cursor-pointer rounded-full transition hover:bg-gray-700"
                  onClick={() => speakMessage(m.text)}
                >
                  {"speechSynthesis" in window ? (
                    <Volume2 size="20px" strokeWidth="2px" />
                  ) : (
                    <Square size="20px" strokeWidth="2px" />
                  )}
                </button>
              </div>
            )}
            <ReactMarkdown>{m.text}</ReactMarkdown>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask me about my projects, stack, or experience…"
        />
        <button disabled={loading || !input.trim()}>
          {loading ? "Thinking…" : "Send"}
        </button>
      </form>
    </div>
  );
}

export default ChatBot;