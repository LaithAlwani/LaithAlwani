import { Link, useLocation } from "react-router-dom";
import Projects from "../../utils/Projects"
import "./style.css";

function Project() {
  const location = useLocation();
  const pathname = location.pathname.split("/portfolio/");
  const project = Projects[pathname[1]];
  console.log(project);

  return (
    <>
      <Link to="/portfolio" className="btn btn-outline-secondary mb-3">
        <span className="fas fa-arrow-left" aria-label="back"></span>
      </Link>

      <div className="row">
        <div className="col-md-6">
          <img
            src={project.image}
            alt="Alt Description"
            className="card-img-top"
          />
        </div>
        <div className="col-md-6 text-center mt-3">
          <h1 className="mb-2">{project.title}</h1>
          <p>{project.description}</p>

          <h6>Technlogies:</h6>
          <div className="row">
            {project.technologies.map((tech, index) => (
              <div key={index} className="col-md-6">
                <p>{tech}</p>
              </div>
            ))}
          </div>
          <div className="btn-group">
            <Link
              to={{ pathname: project.appLink }}
              className="btn  btn-outline-secondary"
              target="_blank"
              rel="noreferrer"
            >
              APPLICATION
            </Link>
            <Link
              to={{
                pathname: project.repoLink,
              }}
              className="btn btn-outline-secondary"
              target="_blank"
              rel="noreferrer"
            >
              REPOSITORY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
