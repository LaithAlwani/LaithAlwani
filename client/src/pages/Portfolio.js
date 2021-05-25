import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Project from "../components/project";
// import ProjectContext from "../utils/ProjectContext";
import Projects from "../utils/Projects";

function Portfolio() {
  // const [projectContext, setProjectContext] = useState({
  //   title: "",
  //   image: "",
  //   description: "",
  //   technologies: [],
  //   appLink: "",
  //   repoLink: "",
  // });
  const [projects, setProjects] = useState([]);
  // const [projectIndex, setProjectIndex] = useState(0)

  useEffect(() => {
    setProjects(Projects);
  }, [projects]);

  // function nextProject(projectIndex) {
  //   // Ensure that the user index stays within our range of users
  //   if (projectIndex >= Projects.length) {
  //     projectIndex = 0;
  //   }
  //   setProjectContext(Projects[projectIndex]);
  //   setProjectIndex(projectIndex);

  // }

  // function previousProject(projectIndex) {
  //   // Ensure that the user index stays within our range of users
  //   if (projectIndex < 0) {
  //     projectIndex = Projects.length - 1;
  //   }
  //   setProjectContext(Projects[projectIndex]);
  //   setProjectIndex(projectIndex);

  // }

  // function handleBtnClick(event) {
  //   // Get the title of the clicked button

  //   const btnName = event.target.getAttribute("data-value");
  //   console.log(event.target.getAttribute("data-value"));
  //   if (btnName === "next") {
  //     const newProjectIndex = projectIndex + 1;
  //     nextProject(newProjectIndex);
  //   } else {
  //     const newProjectIndex = projectIndex - 1;
  //     previousProject(newProjectIndex);
  //   }
  // }

  return (
    <>
      <h1>Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-lg-4 .offset-lg-4 col-md-6">
            <div className="project-container">
              <img
                className="img-fluid"
                src={project.image}
                alt={project.title}
              />
              <div class="overlay">
                <h4 className="mt-3">{project.title}</h4>

                <Link to="/" className="btn btn-project">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
    // <ProjectContext.Provider value={projectContext}>
    // <Project />
    // </ProjectContext.Provider>
  );
}

export default Portfolio;
