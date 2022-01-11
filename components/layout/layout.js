import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div id="main">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
