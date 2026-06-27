import "./App.css";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import About from "./components/about.jsx";
import SignUp from "./Pages/signup.jsx";
import Login from "./Pages/login.jsx";
import Dashboard from "./Pages/dashboard.jsx";

function HomePage() {
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
          <NavLink to="/login" className="footer-n">
            Login
          </NavLink>
          <NavLink to="/signup" className="footer-n">
            Sign Up
          </NavLink>
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
