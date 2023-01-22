import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.about}>
      <div className={styles.imgContainer}>
       
      </div>

      <div>
        <h1>&#60;About Me&#62;</h1>
        <p>
          Full stack web developer with Economics and HR backgrounds, Recently
          earned a Certificate in Full Stack Development from Carleton
          University, with newly developed skills in, React.js, JavaScript,
          HTML, CSS, MySQL, MongoDB and responsive web design.
        </p>
        <p>
          Strengths in analyzing problems and building solutions, passionate
          about developing web applications, with a focus on mobile-first design
          and development. With each project, my aim is to Automate processes
          and use my skills to solve problems efficiently.
        </p>
        <p>
          I Led a team of three to develop a single-page MERN app that helps
          team managers track their players, workouts, schedule and attendance
          to special events. I’m excited to leverage my skills as part of a
          fast-paced, quality-driven team to build better experiences on the
          web.
        </p>
        <a href="./resume.docx" target="_blank" rel="noreferrer" className="btn">
          Resume
        </a>
      </div>
    </div>
  );
}
