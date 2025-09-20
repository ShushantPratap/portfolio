import React from "react";
import { Mail, Lightbulb } from "lucide-react";
import { CovertLatterGen, ProjectIdeaGen, Card } from "../components/index";
import projects from "../../projects/projects";
import skills from "../skills";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


function AI_assistant() {
    React.useEffect(() => {
        document.title = "Ai assistant";
    }, []);

    const { slug } = useParams();

    const aiCard = [
        {
            id: "coverlettergenerator",
            name: "Cover Letter Generator",
            linkName: "Cover latter",
            path: '/ai-assistant/coverlettergenerator',
            icon: <Mail size={28} className="mr-3 text-theme" />,
            component: <CovertLatterGen skills={skills} projects={projects} />,
            description: "Generate a custom cover letter using a job description and your portfolio data.",
        },
        {
            id: "projectideagenerator",
            name: "Project Idea Generator",
            linkName: "Project idea",
            path: '/ai-assistant/projectideagenerator',
            icons: <Lightbulb size={28} className="mr-3 text-theme" />,
            component: <ProjectIdeaGen />,
            description: "Get creative project ideas based on your interests or desired technologies.",

        }
    ]

    return (
        <>
            <section className="fixed top-0 w-screen bg-opacity-95 bg-[#0000005d] backdrop-blur-sm z-50 flex justify-center md:flex-col md:top-[70px] md:w-[20%] md:h-[calc(100vh-70px)] lg:w-[15%]">
                <NavLink
                    to="/ai-assistant/all"
                    className={({ isActive }) => `${isActive || location.pathname === '/ai-assistant' ? 'bg-gray-700' : 'hover:bg-[#421156]'}
                    text-white duration-300 p-1 px-3 rounded-3xl mx-2 m-2 md:m-1`
                    }
                >All</NavLink>
                {aiCard.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `${isActive ? 'bg-gray-700' : 'hover:bg-[#421156]'} text-white duration-300 p-1 px-3 rounded-3xl mx-2 m-2 md:m-1`
                        }
                    >{item.linkName}</NavLink>
                ))}
            </section>
            <section id="ai-assistant" className="min-h-screen text-gray-800 pt-8 p-2 md:p-12 flex items-center justify-center">
                <div className="max-w-7xl ml-auto p-2 mt-10 md:mt-0 md:w-[80%] lg:w-[85%]">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100">
                        AI <span className="text-theme">Assistant</span>
                    </h2>
                    <p className="text-lg text-center my-6 dark:text-gray-100">
                        Leverage AI to help with your job search and project planning!
                    </p>
                    {aiCard.map(item => {
                        if (slug === "all" || location.pathname === "/ai-assistant") {
                            return <div key={item.id}>
                            <Card
                                className="p-5 my-5"
                                children={
                                    <div className="border-b border-gray-200 pb-8 mb-6">
                                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                                            {item.icon}{item.name}
                                        </h3>
                                        <p className="text-md text-gray-600 dark:text-[#ccc] mb-4">
                                            {item.description}
                                        </p>
                                        {item.component}
                                    </div>
                                }
                            />
                            </div>
                        }
                        if (item.id === slug) {
                            return <div key={item.id}>
                            <Card
                                className="p-5 my-5"
                                children={
                                    <div className="border-b border-gray-200 pb-8 mb-6">
                                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                                            {item.icon}{item.name}
                                        </h3>
                                        <p className="text-md text-gray-600 dark:text-[#ccc] mb-4">
                                            {item.description}
                                        </p>
                                        {item.component}
                                    </div>
                                }
                            />
                            </div>
                        }
                    })}
                </div>
            </section>
        </>
    );
}

export default AI_assistant;