import Link from "next/link"

export default function SocialLink({ path, label, icon }) {
  return (
    <li className="list-inline-item">
      <Link href={path}>
        <a
          target="_blank"
          rel="noreferrer"
          aria-label={label}
        >
          <img src={icon} alt="social link" />
        </a>
      </Link>
    </li>
  );
}
