import Image from "next/image";
import styles from "./project-details.module.css";
export default function ProjectDetails({ project }) {
  const { title, image, description, technologies, appLink, repoLink } =
    project;
  return (
    <div className={styles.root}>
      <Image src={image} alt={title} width={500} height={500} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {technologies.map((tech, i) => (
            <li key={i}>
              <Image src={tech} alt="icon" width={96} height={96} />
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
