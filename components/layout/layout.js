import Head from "next/head"
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div id="main">
      <Head>
        <title>Laith Alwani - Full Stack Web Developer 3+ years experience</title>
        <meta name="author" content="Laith Alwani, laithalwani@gmail.com"></meta>
        <meta name="description" content="01/27/2022 - A Full Stack web developer with 3+ years of experience, agile scrum, MVC structure works with React js, and Node js and non-SQL database " />
        <meta name="keywords" content="html, css, javascript, web development, react js"/>
        <meta name="theme-color" content="#f2f2f2"></meta>
        <link rel="icon" href="images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="andriod-touch-icon" href="/images/logo.png" />
      </Head>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
