import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import AboutMeContainer from "./components/AboutMe/AboutMeContainer";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsContainer = lazy(() =>
  import("./components/Projects/ProjectsContainer")
);
// import ProjectsContainer from "./components/Projects/ProjectsContainer";

if (window.location.href === "https://laithalwani.herokuapp.com/") {
  window.location.assign("https://www.laithalwani.ca");
}

function App() {
  const renderLoader = () => <p>Loading</p>;

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);
  return (
    <Wrapper>
      <AboutMeContainer />
      <Suspense fallback={renderLoader()}>
        <ProjectsContainer />
      </Suspense>
    </Wrapper>
  );
}

export default App;
