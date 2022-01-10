import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Link  href="/">
        <h3 className="logo">LA</h3>
        {/* <Image src="/logo.png" width={128} height={77} alt="logo"/> */}
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
    </nav>
  );
}
