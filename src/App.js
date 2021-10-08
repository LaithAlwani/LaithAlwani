import "./App.css";
import Wrapper from "./components/Wrapper";
import AboutMeContainer from "./components/AboutMe/AboutMeContainer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

if (window.location.href === "https://laithalwani.herokuapp.com/") {
  window.location.assign("https://www.laithalwani.ca");
}

function App() {

  useEffect(() => {
    AOS.init({ offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
  },[])
  return (
    <Wrapper>
      
      <AboutMeContainer />
      <ProjectsContainer />
    </Wrapper>
  );
}

export default App;
