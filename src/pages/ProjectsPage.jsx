import React, { useState } from "react";
import projects from "../../projects/projects";
import { ProjectCard, Input } from "../components/index";
import { ProjectInsightModal } from "../components/index";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Search } from "lucide-react"

function ProjectsPage() {
    React.useEffect(() => {
        document.title = "Project";
    }, []);

    const [InsightModal, getProjectInsights] = ProjectInsightModal();
    const { slug } = useParams();
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();


    const projectType = [
        { name: 'Websites', path: '/projects/website' },
        { name: 'Games', path: '/projects/game' },
        { name: 'JavaScript', path: '/projects/JavaScript' },
        { name: 'React', path: '/projects/react' }
    ];

    return (
        <>
            {/* Project Insight Modal */}
            <InsightModal />
            <section className="fixed top-0 w-screen bg-opacity-95 bg-[#0000005d] backdrop-blur-sm z-50 flex justify-around px-3 pr-5 md:justify-center md:flex-col md:top-[70px] md:w-[20%] md:h-[calc(100vh-70px)] lg:w-[15%]">
                <div className="w-full m-1 border-1 rounded-3xl overflow-hidden relative border-[#421156] dark:text-gray-100 md:w-[95%] md:absolute md:left-0 md:top-5">
                    <Input
                        className="w-full p-1.5 placeholder:text-gray-800 dark:placeholder:text-gray-300 outline-0"
                        placeholder="Search"
                        onInput={(e) => setSearchQuery(e.target.value.toUpperCase())}
                    />
                    <Search className="absolute right-1.5 top-[5px]" />
                </div>
                <div className="hidden md:flex md:flex-col text-black dark:text-gray-100">
                    <NavLink
                        to="/projects/all"
                        className={({ isActive }) => `${isActive || location.pathname === '/projects' ? 'bg-gray-700 text-gray-100' : 'hover:bg-[#421156]'}
                        duration-300 p-1 px-2 rounded-3xl my-2 md:m-1`
                        }
                    >All</NavLink>
                    {projectType.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `${isActive ? 'bg-gray-700 text-gray-100' : 'hover:bg-[#421156]'} duration-300 p-1 px-2 rounded-3xl mx-0.5 my-2 md:m-1`
                            }
                        >{item.name}</NavLink>
                    ))}
                </div>
                <select
                    onChange={(e) => navigate(e.target.value)}
                    className="bg-gray-700 rounded-2xl px-2 m-2 text-gray-100 md:hidden">
                    <option value={"/projects/all"}>All</option>
                    {projectType.map(item => (
                        <option
                            value={item.path}
                            key={item.path}
                        >
                            {item.name}
                        </option>
                    ))}
                </select>
            </section>
            <section className="min-h-screen flex dark:text-white pt-5">
                <div className="max-w-7xl ml-auto p-2 mt-10 md:mt-0 md:w-[80%] lg:w-[85%]">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
                        My <span className="text-theme">Projects</span>
                    </h2>
                    <div className="grid grid-cols-1 p-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map((project, index) => {
                            if(!searchQuery){
                                if (slug === "all" || location.pathname === "/projects" || slug === undefined) {
                                    return <div key={index}>
                                        <ProjectCard
                                            className="h-full"
                                            {...project}
                                            getProjectInsights={getProjectInsights}
                                        />
                                    </div>
                                }
                                if (project?.type === slug || project?.technologies.includes(slug)) {
                                    return <div key={index}>
                                        <ProjectCard
                                            className="h-full"
                                            {...project}
                                            getProjectInsights={getProjectInsights}
                                        />
                                    </div>
                                }
                            }else {
                                if (
                                    project?.type.toUpperCase().indexOf(searchQuery)>=0 ||
                                    project?.title.toUpperCase().indexOf(searchQuery)>=0 ||
                                    Object.values(project?.technologies).toLocaleString().toUpperCase().indexOf(searchQuery)>=0
                                ){
                                    return <div key={index}>
                                    <ProjectCard
                                        className="h-full"
                                        {...project}
                                        getProjectInsights={getProjectInsights}
                                    />
                                    </div>
                                }
                            }
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectsPage;