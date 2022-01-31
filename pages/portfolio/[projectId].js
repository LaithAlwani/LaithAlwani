import { useRouter } from "next/router";
import ProjectDetails from "../../components/projects/project-details";
import projects from "../../utils/Projects";

export default function ProjectDetailsPage() {
  const router = useRouter();
  const projectId = router.query.projectId;
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  if (!project) {
    return <p>Project not found</p>;
  }
  return project ? <ProjectDetails project={project} /> : <p>Loading...</p>;
}
