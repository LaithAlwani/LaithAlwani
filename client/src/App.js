import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import loadable from "@loadable/component";
const About = loadable(() => import("./pages/About"));
const Portfolio = loadable(() => import("./pages/Portfolio"));

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
