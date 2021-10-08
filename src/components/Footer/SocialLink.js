export default function SocialLink({ path, label, icon }) {
  return (
    <li className="list-inline-item">
      <a
        href={path}
        target="_blank"
        className="nav-link py-0"
        rel="noreferrer"
        aria-label={label}
      >
        <span className={`fab ${icon} fa-lg`}></span>
      </a>
    </li>
  );
}
