
import SocialLink from "./SocialLink";
import "./style.css";

export default function Footer() {
  return (
    <footer className="text-center ">
      <ul className="list-inline mt-2">
        <SocialLink
          path="https://github.com/LaithAlwani"
          label="Github Account"
          icon="fa-github"
        />

        <SocialLink
          path="https://www.linkedin.com/in/laith-alwani/"
          label="Linkedin Account"
          icon="fa-linkedin"
        />

        <SocialLink
          path="https://www.facebook.com/AlwaniLaith"
          label="Facebook Account"
          icon="fa-facebook"
        />
        <SocialLink
          path="https://www.instagram.com/laitho15/"
          label="Instagram Account"
          icon="fa-instagram"
        />
      </ul>
      <span className="small">©2020 laithalwani@gmail.com - Ottawa,ON.</span>
    </footer>
  );
}
