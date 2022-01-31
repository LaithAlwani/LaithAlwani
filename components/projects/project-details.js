import Image from "next/image";
import styles from "./project-details.module.css";
export default function ProjectDetails({ project }) {
  const { title, image, description, technologies, appLink, repoLink } =
    project;
  return (
    <div className={styles.root}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {technologies.map((tech) => (
            <li>
              <Image src={tech} alt={"alt"} width={96} height={96} />
            </li>
          ))}
        </ul>
       
          <a href={appLink} className="btn">
            App
          </a>
          <a href={repoLink} className="btn">
            Repo
          </a>
        
      </div>
    </div>
  );
}
