import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        {/* <h3 >LA</h3> */}
        <a className="logo">
          <Image
            src="/images/my-image.png"
            width={32}
            height={32}
            alt="logo"
          />
        </a>
      </Link>
      {/* <Link href="/">
        <a>About</a>
      </Link> */}
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}
