import Header from "../../components/Header";
import { frameworks, languages, databases, devOps } from "../../utils/Projects";

export default function page() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Header
          header="About Me"
          subHeader="Get to know who I am, learn about my skills and hobbies"
        />
        <div>
          <p>
            A full-stack web developer with a background in Economics and HR, I bring over 4 years
            of experience to the table. Recently, I earned a Full Stack Development Certificate from
            Carleton University, showcasing my proficiency in React.js, JavaScript, HTML, CSS,
            MySQL, MongoDB, and responsive web design.
          </p>
          <p>
            Known for my strengths in problem analysis and solution development, I am passionate
            about crafting web applications with a mobile-first design approach. Each project I
            undertake is driven by the goal to automate processes and efficiently solve challenges.
          </p>
          <p>
            With a leadership role under my belt, I successfully led a team of three in the
            development of a single-page MERN app tailored for team managers to track players,
            workouts, schedules, and event attendance. Excited to contribute my skills to a
            fast-paced, quality-driven team, I am dedicated to building superior web experiences.
          </p>
          <p>
            For a detailed overview, please refer to my{" "}
            <a
              href="https://docs.google.com/document/d/1B6WerX9wRwKTOYkq_GHP3U0oDAGpZdTT/edit?usp=sharing&ouid=117539619851358162805&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="cv-link">
              resume
            </a>
            .
          </p>
        </div>
        <div className="skills">
          <h3>languages</h3>
          <div>
            <ul className="skill-list">
              {languages.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
          <h3>Framworks</h3>
          <div>
            <ul className="skill-list">
              {frameworks.map((frame, i) => (
                <li key={i}>{frame}</li>
              ))}
            </ul>
          </div>
          <h3>Database</h3>
          <div>
            <ul className="skill-list">
              {databases.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
            </ul>
          </div>
          <h3>DevOps</h3>
          <div>
            <ul className="skill-list">
              {devOps.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
