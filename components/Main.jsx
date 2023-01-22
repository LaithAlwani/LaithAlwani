import socialLinks from "../utils/SocialLinksList"
import SocialLink from "./ui/SocialLink";
export default function Main() {

  return (
    <section className="section">
      <div className="main">
        <ul className="social-links-main">
          {socialLinks.map((link, i)=>(<SocialLink key={i} link={link} />))}
        </ul>
        <h1>Hello, I&apos;m Laith Alwani</h1>
        <p>
          A Full Stack Developer with 3+ years experience with a background in Economics and Human Resources.
        </p>
      </div>
    </section>
  );
}
