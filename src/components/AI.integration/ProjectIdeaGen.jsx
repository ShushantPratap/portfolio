import { useState } from "react";
import { Sparkles } from "lucide-react";
import config from "../../config/config";

function ProjectIdeaGen() {
    // State for Project Idea Generation
    const [projectIdeaKeywords, setProjectIdeaKeywords] = useState('');
    const [generatedProjectIdeas, setGeneratedProjectIdeas] = useState('');
    const [isLoadingProjectIdeas, setIsLoadingProjectIdeas] = useState(false);

    // Function to generate project ideas using Gemini API
    const generateProjectIdeas = async () => {
        if (!projectIdeaKeywords.trim()) {
            setGeneratedProjectIdeas("Please enter some keywords or an area of interest to get project ideas.");
            return;
        }

        setIsLoadingProjectIdeas(true);
        setGeneratedProjectIdeas(''); // Clear previous ideas

        const prompt = `Generate 3-5 creative and feasible web development project ideas based on the following keywords/area of interest: "${projectIdeaKeywords}".
                        For each idea, provide a brief description and suggest a few relevant technologies (e.g., React, Node.js, Firebase, Python, etc.).
                        Format the output clearly with each idea as a separate point.`;

        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = config.geminiApiKey; // Canvas will automatically provide this at runtime
        const apiUrl = config.geminiApiUrl + apiKey;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setGeneratedProjectIdeas(text);
            } else {
                setGeneratedProjectIdeas("Failed to generate project ideas. Please try again.");
            }
        } catch (error) {
            console.error("Error calling Gemini API for project ideas:", error);
            setGeneratedProjectIdeas("An error occurred while fetching project ideas. Please check your network connection.");
        } finally {
            setIsLoadingProjectIdeas(false);
        }
    };


    return (
        <div className="space-y-6">
            <div>
                <label htmlFor="projectIdeaKeywords" className="block text-lg font-medium dark:text-gray-100 text-gray-700 mb-2">
                    Enter Keywords or Area of Interest:
                </label>
                <input
                    type="text"
                    id="projectIdeaKeywords"
                    name="projectIdeaKeywords"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-gray-900 dark:text-gray-100 dark:placeholder:text-[#9c9c9c]"
                    placeholder="e.g., 'AI, fitness, social media, education, gaming'"
                    value={projectIdeaKeywords}
                    onChange={(e) => setProjectIdeaKeywords(e.target.value)}
                />
            </div>
            <button
                onClick={generateProjectIdeas}
                className="w-full bg-[#421156] hover:bg-[#9b59b6] text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-102 flex items-center justify-center"
                disabled={isLoadingProjectIdeas}
            >
                {isLoadingProjectIdeas ? (
                    <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Generating...
                    </>
                ) : (
                    <>
                        <Sparkles size={20} className="mr-2" /> Generate Project Ideas
                    </>
                )}
            </button>
            {generatedProjectIdeas && (
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Generated Ideas:</h3>
                    <textarea
                        readOnly
                        rows="10"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-800 resize-none"
                        value={generatedProjectIdeas}
                    ></textarea>
                </div>
            )}
        </div>
    );
}

export default ProjectIdeaGen;