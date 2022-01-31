import { useState } from "react";

import Project from "../../components/projects/project";
import projects from "../../utils/Projects";
import styles from "../../styles/Porfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  // const [project, setProject] = useState(projects[0]);
  const [projectIndex, setPorjectIdex] = useState(0);

  const cycleProject = (action) => {
    if (action === "next") {
      if (projectIndex == projects.length - 1) {
        setPorjectIdex((value) => (projectIndex = 0));
      } else {
        setPorjectIdex((value) => (projectIndex = value + 1));
      }
    } else {
      if (projectIndex <= 0) {
        setPorjectIdex((value) => (projectIndex = projects.length - 1));
      } else {
        setPorjectIdex((value) => (projectIndex = value - 1));
      }
    }
  };
  return (
    <div className={styles.root}>
      {/* <h1>Portfolio</h1> */}
      <img
        src="/images/next-page.png"
        alt=""
        onClick={() => cycleProject("prev")}
        className={`${styles.icon} ${styles.prev}`}
        
      />
      <Project project={projects[projectIndex]}/>
      
        <img
          src="/images/next-page.png"
          alt=""
          onClick={() => cycleProject("next")}
          className={`${styles.icon} ${styles.next}`}
          
        />
      
    </div>
  );
}
