import React from "react";
import {Link} from "react-router-dom"
import "./style.css";

function Footer() {
  return (
    <footer className="text-center ">
        <ul className="list-inline">
        <li className="list-inline-item">
          <Link
            to={{ pathname: "https://github.com/LaithAlwani" }}
            target="_blank"
            className="nav-link fa-lg"
            rel="noreferrer"
            aria-label="Github account"
          >
            <span className="fab fa-github-square"></span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link
            to={{ pathname: "https://www.linkedin.com/in/laith-alwani/" }}
            target="_blank"
            className="nav-link"
            rel="noreferrer"
            aria-label="Linkedin account"
          >
            <span className="fab fa-linkedin fa-lg"></span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link
            to={{ pathname: "https://www.facebook.com/AlwaniLaith" }}
            target="_blank"
            className="nav-link"
            rel="noreferrer"
            aria-label="Facebook account"
          >
            <span className="fab fa-facebook-square fa-lg"></span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link
            to={{ pathname: "https://www.instagram.com/laitho15/" }}
            target="_blank"
            className="nav-link"
            rel="noreferrer"
            aria-label="Instagram account"
          >
            <span className="fab fa-instagram fa-lg"></span>
          </Link>
        </li>
      </ul>
      <span className="small">©2020 laithalwani@gmail.com - Ottawa,ON.</span>
    </footer>
  );
}

export default Footer;