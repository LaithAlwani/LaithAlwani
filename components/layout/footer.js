import React from "react";
import SocialLink from "../ui/social-links";

export default function Footer() {
  return (
    <footer>
      <ul>
        <SocialLink
          path="https://github.com/LaithAlwani"
          label="Github Account"
          icon="/images/github.png"
        />

        <SocialLink
          path="https://www.linkedin.com/in/laith-alwani/"
          label="Linkedin Account"
          icon="/images/linkedin.png"
        />

        <SocialLink
          path="https://www.facebook.com/AlwaniLaith"
          label="Facebook Account"
          icon="/images/facebook.png"
        />
        <SocialLink
          path="https://www.instagram.com/laitho15/"
          label="Instagram Account"
          icon="/images/instagram.png"
        />
      </ul>
      <span>© 2020 laithalwani@gmail.com</span>
      <span>Ottawa, Ontario.</span>
    </footer>
  );
}
