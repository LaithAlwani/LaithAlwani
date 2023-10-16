import socialLinks from "../utils/SocialLinksList"
import SocialLink from '../components/ui/SocialLink'
import Link from "next/link"

export default function Home() { 
  return (
    <section className="section" id="home">
      {/* <Image src="/images/green-bg.svg" alt="" fill objectFit="cover" priority /> */}
        <ul className="social-links-main">
          {socialLinks.map((link, i)=>(<li key={i}><SocialLink link={link}/></li>))}
        </ul>
      <div className="main">
        <h1>Hello, I&apos;m Laith Alwani</h1>
        <p>
          A Full Stack Developer with 4+ years experience with a background in Economics and Human Resources.
        </p>
        <Link href="projects" className="btn p-3">Projects</Link>
      </div>
    </section>
  )
}