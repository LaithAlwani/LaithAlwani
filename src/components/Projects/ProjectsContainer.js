import { useState, lazy } from "react";
import Projects from "../../utils/Projects"
const ProjectContent = lazy(()=> import("./ProjectContent"))
const ProjectImage = lazy(()=> import("./ProjectImage"))
const ProjectRepoBtn = lazy(()=> import("./ProjectRepoBtn"))

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
