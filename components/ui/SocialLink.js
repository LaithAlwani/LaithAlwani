import Link from "next/link";
import Image from "next/image";

export default function SocialLink({ link }) {
  const { path, label, icon } = link;
  return (
    <Link href={path} target="_blank" rel="noreferrer" aria-label={label}>
      {icon}
    </Link>
  );
}
