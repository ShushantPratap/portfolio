import { useParams } from "react-router-dom";
import { ProjectPreview } from "../components/index";

function ProjectPage() {
    const { slug } = useParams();
    
    return (
        <ProjectPreview projectId={slug} />
    );
}

export default ProjectPage;