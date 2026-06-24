import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import About from "./components/about.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <hr className="line" />
      <About />

      <footer className="footer">
        <ul className="footer-list">
          <li className="footer-l">
            <a href="#about">About</a>
          </li>
          <li className="footer-l">
            <a href="#features">Features</a>
          </li>
          <Link to="/login" className="footer-n">
            Login
          </Link>
          <Link to="/signup" className="footer-n">
            Sign Up
          </Link>
        </ul>

        <p className="footer-para">&copy; 2026 Vibely. All rights reserved.</p>

        <p className="git">
          Made with ❤️ by
          <a href="https://github.com/SrishtiOnGit/Vibely">Srishti</a>
        </p>
      </footer>
    </>
  );
}

export default App;
