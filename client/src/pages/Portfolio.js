import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "../utils/Projects";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Projects);
  }, []);

  return (
    <div className="text-center">
      <h1 className="mb-5">Projects</h1>
      <div className="row mt-3">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="project-container p-3">
              <div className="image-container">
                <Link
                  to={{ pathname: project.appLink }}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="project link"
                >
                  <img
                    className="project-img"
                    src={project.image}
                    alt={project.title}
                  />
                </Link>
              </div>

              <div className="">
                <h2 className="mt-3">{project.title}</h2>
                <div >
                  {project.technologies.map((tech, index) => (
                    <span key={index} >
                      <img  src={tech} alt="" className="tech-icons"/>
                    </span>
                  ))}
                </div>

                <div className="btn-group mt-3">
                  <Link
                    to={{
                      pathname: project.repoLink,
                    }}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="repository link"
                  >
                    REPOSITORY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
