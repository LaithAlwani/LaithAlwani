import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Project from "./components/project/index";


function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/project/:id" component={Project} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
