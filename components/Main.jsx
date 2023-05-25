import socialLinks from "../utils/SocialLinksList"
import SocialLink from "./ui/SocialLink";

export default function Main() {

  return (
    <section className="section" id="home">
      {/* <Image src="/images/green-bg.svg" alt="" fill objectFit="cover" priority /> */}
        <ul className="social-links-main">
          {socialLinks.map((link, i)=>(<li key={i}><SocialLink link={link}/></li>))}
        </ul>
      <div className="main">
        <h1>Hello, I&apos;m Laith Alwani</h1>
        <p>
          A Full Stack Developer with 3+ years experience with a background in Economics and Human Resources.
        </p>
        <a href="#projects" className="btn p-3">Projects</a>
      </div>
    </section>
  );
}
