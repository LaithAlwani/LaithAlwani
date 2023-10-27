"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { MdMenu, MdClose, MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setToggleMenu(false);
      }
    });
    //remove listner
    return () => window.removeEventListener("resize", () => null);
  }, []);

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
          <div className="my-title-container">
            <strong>Laith Alwani</strong>
            <em>Full Stack Developer</em>
          </div>
        </div>
        <div className="nav-links">
          <NavLinks />
        </div>
        <ThemeComponent />
        <button
          aria-label="nav-button"
          onClick={() => setToggleMenu(!toggleMenu)}
          className="mobile-nav-button">
          {!toggleMenu ? <MdMenu size={28} /> : <MdClose size={28} />}
        </button>
      </nav>

      <div
        className={`nav-mobile ${toggleMenu ? "open" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setToggleMenu(!toggleMenu);
        }}>
        <NavLinks />
      </div>
    </>
  );
}

const NavLinks = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="about">About</Link>
      <Link href="projects">Projects</Link>
      <Link href="contact">Contact</Link>
    </>
  );
};

const ThemeComponent = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleRef = useRef();


  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    setIsDark(true);
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    setIsDark(false);
  };

  const toggleTheme = () => {
    toggleRef.current.checked ? setDark() : setLight();
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
    setIsDark(localStorage.getItem('theme'));
  }, []);

  return (
    <label className="toggle-theme">
      <input
        type="checkbox"
        ref={toggleRef}
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className="slider round">
        <MdLightMode />
        <MdDarkMode />
      </span>
    </label>
  );
};
