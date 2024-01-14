import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/navbar";
import socialLinksList from "../utils/SocialLinksList";
import SocialLink from "../components/ui/SocialLink";
import "./globals.css";

export const metadata = {
  title: "Laith Alwani",
  description: "Desinge the next great web site",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Laith Alwani - Full Stack Web Developer 4+ years experience</title>
        <meta name="author" content="Laith Alwani, laithalwani@gmail.com"></meta>
        <meta
          name="description"
          content="01/27/2022 - A Full Stack web developer with 4+ years of experience, agile scrum, MVC structure works with React js, and Node js and non-SQL database "
        />
        <meta name="keywords" content="html, css, javascript, web development, react js" />
        <meta name="theme-color" content="#f2f2f2"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="andriod-touch-icon" href="/images/logo.png" />
      </Head>
      
      <html lang="en">
        <body>
          <Navbar />
          <div className="content">{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}

const Footer = () => {
  return (
    <footer>
      <Image src="/images/logo_300dpi.webp" width={48} height={48} alt="logo" />
      <ul>
        {socialLinksList.map((link, i) => (
          <li key={i}>
            <SocialLink link={link} />
          </li>
        ))}
      </ul>
      <span>© 2020 laithalwani@gmail.com, Ottawa, ON.</span>
    </footer>
  );
};
