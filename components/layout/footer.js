import Image from "next/image";
import socialLinksList from "../../utils/SocialLinksList";
import SocialLink from "../ui/SocialLink";

export default function Footer() {
  return (
    <footer>
      <Image src="/images/logo_300dpi.png" width={48} height={48} alt="logo" />
      <ul>
       {socialLinksList.map((link, i)=>(
          <li key={i}><SocialLink link={link}/></li>
        ))}
      </ul>
      <span>© 2020 laithalwani@gmail.com, Ottawa, ON.</span>
    </footer>
  ); 
}
