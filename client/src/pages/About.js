import { Link } from "react-router-dom";
import image from "../images/myimage-min.jpg";
import resume from "../images/resume21.pdf";

const About = () => {
  return (
    <div className="row">
      {/* <!-- Personal Image  --> */}
      <div className=" col-md-6 order-md-2 ">
        <img className="img-fluid p-3" src={image} alt="middle eastern man" id="my-image" />
      </div>
      {/* <!-- About Me --> */}
      <div className="col-md-6 order-md-1 my-auto">
        <h2 className="text-center mb-4">&#60;About Me&#62;</h2>
        <div className="text-left">
          <p>
            Full stack web developer with a background in economics and HR. I
            recently earned a certificate in full stack development from
            Carleton University. As a student I learned React.js, JavaScript,
            HTML, CSS, MySQL, MongoDB and responsive web design.
          </p>
        </div>
        <div className="text-center">
          <Link
            to={{ pathname: resume }}
            className="btn btn-secondary"
            target="blank"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
