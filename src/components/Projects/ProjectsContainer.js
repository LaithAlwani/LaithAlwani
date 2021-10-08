import { useState } from "react";
import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";
import ProjectRepoBtn from "./ProjectRepoBtn";
import Projects from "../../utils/Projects";

export default function ProjectsContainer() {
  const [projects] = useState(Projects);
  let animationDelay = 0;
  return (
    <div id="portfolio" className="align-content content-height">
      <div>
        <h2 className="mb-2">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 align-content" data-aos="fade-up" data-aos-delay={animationDelay}>
              
              <div className="mb-4"  >
                <ProjectImage
                  image={project.image}
                  title={project.title}
                  appLink={project.appLink}
                />
              
                <ProjectContent
                  title={project.title}
                  technologies={project.technologies}
                />
                <ProjectRepoBtn repoLink={project.repoLink} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
