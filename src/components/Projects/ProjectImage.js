
export default function ProjectImage({image, title, appLink}) {
  return (
    <div className="image-container">
      <a
        href={ appLink }
        target="_blank"
        rel="noreferrer"
        aria-label="project link"
      >
        <img className="project-img" src={image} alt={title} />
      </a>
    </div>
  );
}
