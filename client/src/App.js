import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
const About = React.lazy(() => import("./pages/About"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <React.Suspense fallback={<h4>Loading...</h4>}>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </React.Suspense>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
