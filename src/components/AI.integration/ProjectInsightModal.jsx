import { useState } from "react";
import config from "../../config/config";

const ProjectInsightModal = () => {
    const [showInsightModal, setShowInsightModal] = useState(false);
    const [currentProjectInsight, setCurrentProjectInsight] = useState('');
    const [isLoadingInsight, setIsLoadingInsight] = useState(false);
    
    const isOpen = showInsightModal,
        onClose = () => setShowInsightModal(false),
        insight = currentProjectInsight,
        isLoading = isLoadingInsight;

    async function getProjectInsights(projectTitle, projectDescription, projectTechnologies){
        setIsLoadingInsight(true);
        setCurrentProjectInsight(''); // Clear previous insight
        setShowInsightModal(true); // Open modal immediately to show loading

        const prompt = `Generate 3-5 key insights or highlights for a web development project with the following details:
        Title: ${projectTitle}
        Description: ${projectDescription}
        Technologies: ${projectTechnologies.join(', ')}

        Focus on the project's impact, unique features, challenges overcome, or what makes it stand out. Present them as bullet points or a short paragraph.`;

        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = config.geminiApiKey; // Canvas will automatically provide this at runtime
        const apiUrl = config.geminiApiUrl+apiKey;

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
                setCurrentProjectInsight(text);
            } else {
                setCurrentProjectInsight("Failed to generate insights. Please try again.");
            }
        } catch (error) {
            console.error("Error calling Gemini API for insights:", error);
            setCurrentProjectInsight("An error occurred while fetching insights. Please check your network connection.");
        } finally {
            setIsLoadingInsight(false);
        }
    };
    
    function InsightModal(){
        return isOpen ? (
        <div className="fixed inset-0 bg-[#0000005d] backdrop-blur-sm z-100 p-5 py-15 overflow-y-scroll">
            <div className="bg-white rounded-md shadow-2xl p-8 max-w-2xl w-full mx-auto h-fit relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 text-2xl font-bold cursor-pointer"
                >&times;</button>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Project Insights ✨</h3>
                {isLoading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                        <p className="ml-4 text-gray-700">Generating insights...</p>
                    </div>
                ) : (
                    <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {insight || "No insights generated yet. Try again!"}
                    </p>
                )}
            </div>
        </div>
        ) : null;
    }

    return [InsightModal, getProjectInsights];
};

export default ProjectInsightModal;