import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu, MdClose, MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setToggleMenu(false)
      }
    });
    return () => window.removeEventListener('resize',()=>null)
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
        <button
          aria-label="nav-button"
          onClick={() => setToggleMenu(!toggleMenu)}
          className="mobile-nav-button">
          {!toggleMenu ? <MdMenu size={28} /> : <MdClose size={28} />}
        </button>
      </nav>
      {toggleMenu && (
        <div className="nav-mobile">
          <NavLinks />
        </div>
      )}
    </>
  );
}

const NavLinks = () => {
  return (
    <>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <ThemeComponent />
    </>
  );
};

const ThemeComponent = () => {
  const [isDark, setIsDark] = useState(false);

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

  const toggleTheme = (e) => {
    if (e.target.checked) setDark();
    else setLight();
  };

  useEffect(() => {
    setIsDark(localStorage.getItem("theme") === "dark" ? true : false);
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
  }, [toggleTheme]);

  return (
    <>
      <label className="toggle-theme">
        <input type="checkbox" checked={isDark} onChange={toggleTheme} />
        <div className="slider round">
          <MdLightMode />
          <MdDarkMode />
        </div>
      </label>
    </>
  );
};
