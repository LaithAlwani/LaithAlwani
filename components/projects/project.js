import styles from "./project.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }) {
  const { id, title, image, technologies, appLink, repoLink } = project;
  return (
    <div className={styles.root}>
      <div>
        <a
          className="btn title"
          href={appLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}
        </a>
      </div>

      <Link href={`/portfolio/${id}`}>
        <a>
          <Image src={image} alt={title} width={375} height={375} priority />
        </a>
      </Link>

      <div>
        <a
          href={repoLink}
          className="btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Repo
        </a>
      </div>
      <div>
        <ul>
          {technologies.map((tech, i) => (
            <li key={i}>
              <Image src={tech} alt="" width={48} height={48} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
