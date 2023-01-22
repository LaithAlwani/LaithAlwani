import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname)

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image
            src="/images/my-image.png"
            alt="Laith Alwani"
            id="avatar"
            priority
            width={48}
            height={48}
          />
          {/* <Image src="/images/logo.png" width={48} height={48} alt="logo" /> */}
        </Link>
        <div style={{ marginLeft: "0.5rem" }}>
          <h2 style={{ margin: 0 }}>Laith Alwani</h2>
          <em style={{ fontSize: "0.8rem" }}>Full Stack Developer</em>
        </div>
      </div>
      <div className="nav-links">
        <Link href="">Home</Link>
        <Link href="#about" className={pathname === "/" ? " nav-link active" : " nav-link"}>
          About
        </Link>
        <Link
          href="#projects"
          className={pathname === "/portfolio" ? " nav-link active" : " nav-link"}>
          Projects
        </Link>
        <Link href="#contact" className={pathname === "/contact" ? " nav-link active" : " nav-link"}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
