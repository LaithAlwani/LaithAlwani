

export default function ProjectContent({title, technologies}) {
  return (
    <div className="mb-2">
      <h3 className="my-3">{title}</h3>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>
            <img src={tech} alt="" className="tech-icons" />
          </span>
        ))}
      </div>
    </div>
  );
}
