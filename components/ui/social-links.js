import Link from "next/link";
import Image from "next/image";

export default function SocialLink({ link }) {
  const { path, label, icon, alt } = link;
  return (
    <Link href={path}>
      <a target="_blank" rel="noreferrer" aria-label={label}>
        <Image src={icon} alt={alt} width={32} height={32} />
      </a>
    </Link>
  );
}
