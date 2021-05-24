import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../utils/ProjectContext";
import "./style.css";

function Project({ handleBtnClick }) {
  const { title, image, description, technologies, appLink, repoLink } =
    useContext(ProjectContext);
  return (
    <div className=" row ">
      <div className="col-12 ">
        <div className="card text-center ">
          <img src={image} alt="Alt Description" className="card-img-top" />
          <div className="card-body ">
            <h5 className="card-title ">{title}</h5>
            <p className="card-text text-center">{description}</p>
            <div className=" card-text ">
              <h6>Technlogies:</h6>
              <div className="row">
                {technologies.map((tech, index) => (
                  <div className="col-md-6">
                    <p key={index}>{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <Link
                to={{ pathname: appLink }}
                className="btn btn-sm"
                target="_blank"
              >
                APPLICATION
              </Link>
              <Link
                to={{
                  pathname: repoLink,
                }}
                className="btn btn-sm"
                target="_blank"
              >
                REPOSITORY
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center btn-container">
        <button className="btn" data-value="previous" onClick={handleBtnClick}>
          <span data-value="previous" className="fas fa-arrow-left"></span>
        </button>
        <button className="btn" data-value="next" onClick={handleBtnClick}>
          <span data-value="next" className="fas fa-arrow-right"></span>
        </button>
      </div>
    </div>
  );
}

export default Project;
