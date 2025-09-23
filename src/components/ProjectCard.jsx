import { CodeXml, Github, Sparkles, } from 'lucide-react';
function ProjectCard({
    className,
    id,
    image,
    title,
    description,
    technologies = [],
    githubLink,
    liveLink,
    getProjectInsights
}) {
    return (
        <div
            className={`bg-[#e8e7e7] dark:bg-[#1c1c1c] rounded-md shadow-md overflow-hidden duration-300 hover:scale-102 hover:shadow-xl ${className}`}
        >
            <div className="bg-black dark:bg-white h-52 sm:h-40 md:h-48 lg:h-52">
                {image && <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/F8F8F8/333333?text=${title}`; }}
                />}
            </div>
            <div className="p-6">
                {title &&
                    <h3 className="text-2xl font-semibold mb-3 text-theme">{title}</h3>
                }
                {description && 
                    <p className="text-gray-950 dark:text-gray-300 mb-4 text-base">{description}</p>
                }
                {technologies.length > 0 &&
                <div className="flex flex-wrap gap-2 mb-5">
                    {technologies.map((tech, idx) => (
                        <span
                        key={idx}
                        className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full font-medium capitalize"
                        children={tech}
                        />
                    ))}
                </div>
                }
                <div className="flex gap-4 flex-wrap">
                    {githubLink &&
                    <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#9b59b6] hover:bg-[#421156] text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out"
                    >
                        <Github size={18} className="mr-2" />GitHub
                    </a>
                    }
                    {liveLink &&
                    <a
                    href={`/preview/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center border-2 border-theme text-gray-950 dark:text-[#9b59b6] hover:bg-[#9b59b6] hover:text-white px-4 py-1.5 rounded-full text-sm font-medium transition duration-300 ease-in-out"
                    >
                        <CodeXml size={18} className="mr-2" />Live Demo
                    </a>
                    }
                    {getProjectInsights &&
                    <button
                    onClick={() => getProjectInsights(title, description, technologies)}
                    className="flex items-center bg-[#421156] hover:bg-[#9b59b6] text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out"
                    >
                        <Sparkles size={18} className="mr-2" />Get Project Insights
                    </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;