import React from "react";
import projects from "../../projects/projects";
import { ProjectCard } from "../components/index";
import { ProjectInsightModal } from "../components/index";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function ProjectsPage() {
    React.useEffect(() => {
        document.title = "Project";
    }, []);

    const [InsightModal, getProjectInsights] = ProjectInsightModal();
    const { slug } = useParams();

    const projectType = [
        { name: 'Websites', path: '/projects/website' },
        { name: 'JavaScript', path: '/projects/JavaScript' },
        { name: 'React', path: '/projects/react' }
    ];

    return (
    <>
        {/* Project Insight Modal */}
        <InsightModal />
        <section className="fixed top-0 w-screen bg-opacity-95 bg-[#0000005d] backdrop-blur-sm z-50 flex justify-center md:flex-col md:top-[70px] md:w-[20%] md:h-[calc(100vh-70px)] lg:w-[15%]">
            <NavLink
                to="/projects/all"
                className={({isActive}) => `${isActive || location.pathname==='/projects' ? 'bg-gray-700' : 'hover:bg-[#421156]'}
                text-white duration-300 p-1 px-3 rounded-3xl mx-2 m-2 md:m-1`
                }
            >All</NavLink>
            {projectType.map(item => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({isActive}) => `${isActive ? 'bg-gray-700' : 'hover:bg-[#421156]'} text-white duration-300 p-1 px-3 rounded-3xl mx-2 m-2 md:m-1`
                }
                >{item.name}</NavLink>
            ))}
        </section>
        <section className="min-h-screen flex dark:text-white pt-5">
            <div className="max-w-7xl ml-auto p-2 mt-10 md:mt-0 md:w-[80%] lg:w-[85%]">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
                    My <span className="text-theme">Projects</span>
                </h2>
                <div className="grid grid-cols-1 p-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => {
                        if(slug === "all" || location.pathname === "/projects"){
                            return <div key={index}>
                            <ProjectCard
                                className="h-full"
                                {...project}
                                getProjectInsights={getProjectInsights}
                            />
                            </div>
                        }
                        if(project?.type === slug || project?.technologies.includes(slug)){
                            return <div key={index}>
                            <ProjectCard
                                className="h-full"
                                {...project}
                                getProjectInsights={getProjectInsights}
                            />
                            </div>
                        }
                    })}
                </div>
            </div>
        </section>
    </>
    );
}

export default ProjectsPage;