import Link from "next/link"
import Image from "next/image"

export default function SocialLink({ path, label, icon }) {
  return (
    <li className="list-inline-item">
      <Link href={path}>
        <a
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="btn social-link"
        >
          <Image src={icon} alt="social link" width={32} height={32}/>
        </a>
      </Link>
    </li>
  );
}
