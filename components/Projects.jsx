import Image from "next/image";
import { projects } from "../utils/Projects";
import Header from "./Header";

export default function Projects() {
  return (
    <section className="section" id="projects">
      {/* <Image src="/images/green-bg.svg" alt="" fill objectFit="cover" /> */}

      <div className="container">
        <Header
          header="Projects"
          subHeader="A collection of higlighted projects that I have worked on during my career"
        />
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project-container">
              <Image
                src={project.image}
                alt={project.title}
                className="project-image"
                width={256}
                height={256}
              />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
