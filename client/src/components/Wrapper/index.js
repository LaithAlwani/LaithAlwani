import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./style.css";

function Wrapper({ children }) {
  return (
    <>
      <main className="wrapper text-center">
        <Navbar />
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Wrapper;
