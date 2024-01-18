import Image from "next/image";
import { projects } from "../../utils/Projects";
import Header from "../../components/Header";

export default function ProjectsPage() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Header
          header="Projects"
          subHeader="A collection of higlighted projects that I have worked on during my career"
        />
        <div className="projects">
          {projects.map((project) => (
            <a href={project.appLink} target="_blank" rel="noreferrer" key={project.id} className="project-container">
              <Image
                src={project.image}
                alt={project.title}
                className="project-image"
                width={256}
                height={256}
              />
              <h3>{project.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
