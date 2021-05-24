import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../utils/ProjectContext";
import "./style.css";

function Project({ handleBtnClick }) {
  const { title, image, description, technologies, appLink, repoLink } =
    useContext(ProjectContext);
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="row">
            <div className="col-md-6">
              <img src={image} alt="Alt Description" className="card-img-top" />
            </div>
            <div className="col-md-6 text-center mt-3">
              <h5 className=" ">{title}</h5>
              <p className=" ">{description}</p>

              <h6>Technlogies:</h6>
              <div className="row">
                {technologies.map((tech, index) => (
                  <div key={index} className="col-md-6">
                    <p>{tech}</p>
                  </div>
                ))}
              </div>

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
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-value="previous"
          onClick={handleBtnClick}
        >
          <span
            className="fas fa-arrow-left"
            data-value="previous"
            onClick={handleBtnClick}
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-value="next"
          onClick={handleBtnClick}
        >
          <span
            className="fas fa-arrow-right"
            data-value="next"
            onClick={handleBtnClick}
          ></span>
        </a>
      </div>
    </>
  );
}

export default Project;
