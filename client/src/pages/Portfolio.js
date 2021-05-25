import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "../utils/Projects";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("im here");
    setProjects(Projects);
  }, []);

  return (
    <div className="text-center">
      <h1>Projects</h1>
      <div className="row mt-3">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 .offset-lg-4 col-md-6">
            <div className="project-container">
              <img
                className="project-img"
                src={project.image}
                alt={project.title}
              />
              <div className="overlay">
                <h2 className="mt-3">{project.title}</h2>

                <Link
                  to={`/project/${index}`}
                  className="btn btn-project"
                  aria-label="view project"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
