import React from "react";
import Header from "./Header";

export default function About() {
  return (
    <section className="section bg-linear-gray" id="about">
      
      <Header
        header="About Me"
        subHeader="Get to know who I am, learn about my skills what hobbies"
      />
      <div className="container">
        <p>
          Full stack web developer with Economics and HR backgrounds, Recently earned a Certificate
          in Full Stack Development from Carleton University, with newly developed skills in,
          React.js, JavaScript, HTML, CSS, MySQL, MongoDB and responsive web design.
        </p>
        <p>
          Strengths in analyzing problems and building solutions, passionate about developing web
          applications, with a focus on mobile-first design and development. With each project, my
          aim is to Automate processes and use my skills to solve problems efficiently.
        </p>
        <p>
          I Led a team of three to develop a single-page MERN app that helps team managers track
          their players, workouts, schedule and attendance to special events. I’m excited to
          leverage my skills as part of a fast-paced, quality-driven team to build better
          experiences on the web, to learn more please check out my <a href="./resume.docx" target="_blank" rel="noreferrer" className="cv-link">
          resume
        </a>
        </p>
        
      </div>
    </section>
  );
}
