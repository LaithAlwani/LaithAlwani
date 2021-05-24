import { Link } from "react-router-dom";
import image from "../images/my-image.jpg";
import resume from "../images/resume2021.pdf";

const About = () => {
  return (
    <div className="row">
      {/* <!-- Personal Image  --> */}
      <div className=" col-md-6 order-md-2 ">
        <img className="img-fluid p-3" src={image} alt="middle eastern man" />
      </div>
      {/* <!-- About Me --> */}
      <article className="col-md-6 order-md-1 my-auto">
        <h2 className="text-center mb-4">&#60;About Me&#62;</h2>
        <div className="text-left">
          <p>
            Full stack web developer with Economics and HR backgrounds, Recently
            earned a certificate in full stack development from Carleton
            University, with newly developed skills in, React.js, JavaScript,
            HTML, CSS, MySQL, MongoDB and responsive web design.
          </p>
        </div>
        <div className="text-center">
          <Link to={{ pathname: resume }} className="btn" target="blank">
            Resume
          </Link>
        </div>
      </article>
    </div>
  );
};

export default About;
