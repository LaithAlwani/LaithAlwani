import socialLinksList from "../../utils/SocialLinksList";
import SocialLink from "../ui/SocialLink";

export default function Footer() {
  return (
    <footer>
      <ul>
       {socialLinksList.map((link, i)=>(
          <li key={i}><SocialLink link={link}/></li>
        ))}
      </ul>
      <span>© 2020 laithalwani@gmail.com</span>
      <span>Ottawa, ON.</span>
    </footer>
  ); 
}
