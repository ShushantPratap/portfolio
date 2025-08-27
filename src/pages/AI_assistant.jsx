import { Mail, Lightbulb } from "lucide-react";
import { CovertLatterGen, ProjectIdeaGen } from "../components";
import projects from "../../projects/projects";
import skills from "../skills";


function AI_assistant() {
    return (
        <section id="ai-assistant" className="min-h-screen 9 text-gray-800 p-8 md:p-12 flex items-center justify-center">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
                    AI <span className="text-red-600">Assistant</span>
                </h2>
                <p className="text-lg text-center mb-8 text-gray-700">
                    Leverage AI to help with your job search and project planning!
                </p>

                <div className="border-b border-gray-200 pb-8 mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Mail size={28} className="mr-3 text-red-600" /> Cover Letter Generator
                    </h3>
                    <p className="text-md text-gray-700 mb-4">
                        Generate a custom cover letter using a job description and your portfolio data.
                    </p>
                    <CovertLatterGen skills={skills} projects={projects} />
                </div>

                <div className="pt-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Lightbulb size={28} className="mr-3 text-red-600" /> Project Idea Generator
                    </h3>
                    <p className="text-md text-gray-700 mb-4">
                        Get creative project ideas based on your interests or desired technologies.
                    </p>
                    <ProjectIdeaGen />
                </div>
            </div>
        </section>
    );
}

export default AI_assistant;