import socialLinks from "../utils/SocialLinksList";
import SocialLink from "../components/ui/SocialLink";

export default function Home() {
  return (
    <section className="section" id="home">
      <div className="main">
        <h1>Hello, I&apos;m Laith Alwani</h1>
        <p>
          A Full Stack Developer with 4+ years experience with a background in Economics and Human
          Resources.
        </p>
        <a
          href="https://docs.google.com/document/d/1B6WerX9wRwKTOYkq_GHP3U0oDAGpZdTT/edit?usp=sharing&ouid=117539619851358162805&rtpof=true&sd=true"
          className="btn p-3"
          target="_blank">
          Resume
        </a>
      </div>
    </section>
  );
}
