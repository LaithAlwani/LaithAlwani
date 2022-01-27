import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      

      <div className={styles.about}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/my-image.png"
            alt="Laith Alwani"
            id="my-image"
            priority
            width={900}
            height={800}
          />
        </div>

        <div>
          <h1>&#60;About Me&#62;</h1>
          <p>
            Full stack web developer with a background in economics and HR
            3+ years of experience in web development and a certificate in full stack
            development from Carleton University. I have experiance in Next.js
            React.js, JavaScript, HTML, CSS, MySQL, MongoDB and responsive web
            design.
          </p>
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
