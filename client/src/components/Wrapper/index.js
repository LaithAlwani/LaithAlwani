import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./style.css";

function Wrapper({children}) {
  return (
    <>
    <main className="wrapper container text-center">
      <Navbar />
      {children}
      </main>
      <Footer />
      </>
  );
}

export default Wrapper;