import styles from "./project.module.css";
import Image from "next/image";

export default function Project({ project }) {
  const { title, image, technologies, appLink, repoLink } = project;
  return (
    <div className={styles.root}>
      <div>
        <a className="btn" href={appLink}>
          {title}
        </a>
      </div>
      <Image src={image} alt={title} width={375} height={375} />
      <div>
        <a href={repoLink} className="btn">
          Repo
        </a>
      </div>
    </div>
  );
}
