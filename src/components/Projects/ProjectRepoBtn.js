export default function ProjectRepoBtn({repoLink}) {
  return (
    <a
      href={ repoLink}
      className="btn btn-secondary mt-2"
      target="_blank"
      rel="noreferrer"
      aria-label="repository link"
    >
      REPOSITORY
    </a>
  );
}
