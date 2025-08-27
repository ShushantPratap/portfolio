import { useState } from "react";
import { Sparkles } from "lucide-react";

function CovertLatterGen({
    skills=[],
    projects=[]
}) {
    // State for Cover Letter Generation
    const [jobDescription, setJobDescription] = useState('');
    const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');
    const [isLoadingCoverLetter, setIsLoadingCoverLetter] = useState(false);

    // Function to generate a cover letter using Gemini API
    const generateCoverLetter = async () => {
        if (!jobDescription.trim()) {
            setGeneratedCoverLetter("Please paste a job description to generate a cover letter.");
            return;
        }

        setIsLoadingCoverLetter(true);
        setGeneratedCoverLetter(''); // Clear previous cover letter

        const developerSkills = skills.map(cat => cat.items.join(', ')).join(', ');
        const developerProjects = projects.map(p => `${p.title}: ${p.description} (Technologies: ${p.technologies.join(', ')})`).join('\n- ');

        const prompt = `Write a professional cover letter for a web developer applying for a job.
        The job description is:
        "${jobDescription}"
        The developer has the following skills:
        - ${developerSkills}
        Key projects include:
        - ${developerProjects}
        The cover letter should be concise, highlight relevant skills and projects from the list above, express enthusiasm for the role, 
        and encourage an interview. Start with "Dear Hiring Manager," and end with "Sincerely, [Shushant Pratap]".`;

        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = "AIzaSyBXChy1q5uPDeuo3m95NAwALY4SDVXUItI"; // Canvas will automatically provide this at runtime
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

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
                setGeneratedCoverLetter(text.replace("[Your Name]", "John Doe")); // Replace placeholder name
            } else {
                setGeneratedCoverLetter("Failed to generate cover letter. Please try again.");
            }
        } catch (error) {
            console.error("Error calling Gemini API for cover letter:", error);
            setGeneratedCoverLetter("An error occurred while generating the cover letter. Please check your network connection.");
        } finally {
            setIsLoadingCoverLetter(false);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <label htmlFor="jobDescription" className="block text-lg font-medium text-gray-700 mb-2">
                    Paste Job Description Here:
                </label>
                <textarea
                    id="jobDescription"
                    name="jobDescription"
                    rows="10"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-gray-900"
                    placeholder="e.g., 'We are looking for a skilled React Developer with experience in Node.js...'"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
            </div>
            <button
                onClick={generateCoverLetter}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                disabled={isLoadingCoverLetter}
            >
                {isLoadingCoverLetter ? (
                    <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Generating...
                    </>
                ) : (
                    <>
                        <Sparkles size={20} className="mr-2" /> Generate Cover Letter
                    </>
                )}
            </button>
            {generatedCoverLetter && (
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Generated Cover Letter:</h3>
                    <textarea
                        readOnly
                        rows="15"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-800 resize-none"
                        value={generatedCoverLetter}
                    ></textarea>
                </div>
            )}
        </div>
    );
}

export default CovertLatterGen;