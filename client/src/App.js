import "./App.css";
import Wrapper from "./components/Wrapper";
import AboutMeContainer from "./components/AboutMe/AboutMeContainer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import "animate.css"
import Test from "./components/Test";

if (window.location.href === "https://laithalwani.herokuapp.com/") {
  window.location.assign("https://www.laithalwani.ca");
}

function App() {
  return (
    <Wrapper>
      <Test />
      <AboutMeContainer />
      <ProjectsContainer />
    </Wrapper>
  );
}

export default App;
