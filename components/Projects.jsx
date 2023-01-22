import projects from "../utils/Projects";
import Header from "./Header";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Header
        header="projects"
        subHeader="A collection of higlighted projects that I have worked on during my career"
      />
      <div className="container projects">
        {projects.map((project) => (
          <div key={project.id} className="project-container">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
