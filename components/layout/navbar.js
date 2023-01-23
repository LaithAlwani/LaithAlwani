import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {MdMenu, MdClose} from "react-icons/md"

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
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
          </Link>
          <div style={{ marginLeft: "0.5rem" }}>
            <h2 style={{ margin: 0 }}>Laith Alwani</h2>
            <em style={{ fontSize: "0.8rem" }}>Full Stack Developer</em>
          </div>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setToggleMenu(!toggleMenu)} className="mobile-nav-button">
          {!toggleMenu ? <MdMenu size={28} /> : <MdClose size={28} />}
        </button>
      </nav>
      {toggleMenu && (
        <div className="nav-mobile" onClick={()=>setToggleMenu(!toggleMenu)}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </>
  );
}
