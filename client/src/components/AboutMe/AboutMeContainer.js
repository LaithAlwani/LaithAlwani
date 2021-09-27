import AboutMe from "./AboutMeContent";
import MyImage from "./MyImage";
import ProjectsContainer from "../Projects/ProjectsContainer";

export default function AboutMeContainer() {
  return (
    <div id="about-me" className="align-content content-height">
      <div className="row">
        <MyImage />
        <AboutMe />
      </div>
    </div>
  );
}
