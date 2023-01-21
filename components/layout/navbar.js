import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/images/logo.png" width={72} height={72} alt="logo" />
        </Link>
      </div>
      <Link href="/">
        <a className={pathname === "/" ? "btn nav-link active" : "btn nav-link"}>About</a>
      </Link>
      <Link href="/portfolio">
        <a className={pathname === "/portfolio" ? "btn nav-link active" : "btn nav-link"}>
          Portfolio
        </a>
      </Link>
      <Link href="/contact">
        <a className={pathname === "/contact" ? "btn nav-link active" : "btn nav-link"}>Contact</a>
      </Link>
    </nav>
  );
}
