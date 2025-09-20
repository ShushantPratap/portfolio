import { useEffect, useState } from "react";
import projects from "../../projects/projects";
import { Github, Sparkles } from "lucide-react";
import { ProjectInsightModal } from "./index";

function ProjectPreview({ projectId }) {
    const [project, setProject] = useState(null);
    const [InsightModal, getProjectInsights] = ProjectInsightModal();

    useEffect(() => {
        const project = projects.filter(item => item.id === projectId);
        setProject(project[0]);
    }, [projectId])

    return (
        <>
            <InsightModal />
            <div className="h-screen relative z-50 border-y-4 bg-gray-50 border-[#9b59b6] dark:border-gray-50">
                <iframe
                    src={project?.liveLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <section className="max-w-7xl mx-auto p-3">
                <div className="grid grid-cols-2 text-2xl md:text-4xl p-2 mt-5 dark:text-gray-50">
                    <div className="font-bold md:text-5xl">{project?.title}</div>
                    <div className="flex justify-end items-start space-x-6">
                        <a
                            href="https://github.com/ShushantPratap/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-[#9b59b6] transition-colors duration-300"
                            title="GitHub Profile"
                        >
                            <i className="fa fa-github" />
                        </a>
                        <a
                            href="https://in.pinterest.com/shushantpratap/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-[#9b59b6] transition-colors duration-300"
                            title="Pinterest Profile"
                        >
                            <i className="fa fa-pinterest" />
                        </a>
                        <a href="https://www.instagram.com/web_ui_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-[#9b59b6] transition-colors duration-300"
                            title="Instagram Profile"
                        >
                            <i className="fa fa-instagram" />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-2 dark:text-gray-50">
                    <div className="text-gray-950 dark:text-gray-200 mt-5">
                        <p>{project?.description}</p>
                        <div className="flex flex-wrap gap-2 mt-5">
                            {project?.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full font-medium"
                                    children={tech}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-5 sm:px-5 sm:mt-5">
                        <a
                            href={project?.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-[#9b59b6] hover:bg-[#421156] text-white p-3 mb-2 rounded-full text-sm font-medium transition duration-300 ease-in-out"
                        >
                            <Github size={18} className="mr-2" />GitHub
                        </a>
                        <button
                            onClick={() => getProjectInsights(project?.title, project?.description, project?.technologies)}
                            className="flex items-center bg-[#421156] hover:bg-[#9b59b6] text-white p-3 mt-2 rounded-full text-sm font-medium transition duration-300 ease-in-out"
                        >
                            <Sparkles size={18} className="mr-2" />Get Project Insights
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectPreview;