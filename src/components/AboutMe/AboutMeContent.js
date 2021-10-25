export default function AboutMeContent() {
  return (
    <div className="col-md-6 order-md-1" data-aos="flip-right">
      <div className="align-content">
        <div>
          <h2 className=" mb-4">&#60;About Me&#62;</h2>
          <p className="text-left">
            Full stack web developer with a background in economics and HR. I
            recently earned a certificate in full stack development from
            Carleton University. As a student I learned React.js, JavaScript,
            HTML, CSS, MySQL, MongoDB and responsive web design.
          </p>
          <a
            href=  "./resume.pdf" 
            className="btn btn-secondary mt-2"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
