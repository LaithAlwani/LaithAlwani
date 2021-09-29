import { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [location, setLocation] = useState("about-me");
  const handleClick = (loc) => {
    setLocation(loc);
  };

  return (
    <nav className="navbar navbar-expand navbar-light sticky-top" data-aos="fade-down">
      <div className="container">
        <div className="navbar-brand">Laith Alwani</div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              href="#about-me"
              className={
                location === "about-me" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleClick("about-me")}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className={
                location === "portfolio" ? "nav-link active" : "nav-link"
              }
              onClick={() => handleClick("portfolio")}
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
