import React from "react";
import { useParams } from "react-router-dom";
import { ProjectPreview } from "../components/index";

function ProjectPage() {
    React.useEffect(() => {
        document.title = "Preview";
    }, []);
    
    const { slug } = useParams();
    
    return (
        <ProjectPreview projectId={slug} />
    );
}

export default ProjectPage;