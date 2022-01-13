import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laith Alwani</title>
        <meta name="description" content="My Portifolio" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

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
          <h2>&#60;About Me&#62;</h2>
          <p>
            Full stack web developer with a background in economics and HR. I
            recently earned a certificate in full stack development from
            Carleton University. As a student I learned React.js, JavaScript,
            HTML, CSS, MySQL, MongoDB and responsive web design.
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
