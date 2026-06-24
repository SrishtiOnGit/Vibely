import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">
        <h1>Vibely</h1>
      </a>
      <nav className="links">
        <ul className="nav-links">
          <li className="nav-links">
            <a href="#feautures" className="nav-items">
              Features
            </a>
          </li>

          <li className="nav-links">
            <a href="#about" className="nav-items">
              About
            </a>
          </li>

          <li className="nav-links">
            <NavLink to="/Login" className="nav-auth">
              Login
            </NavLink>
          </li>

          <li className="nav-links">
            <NavLink to="/signup" className="nav-auth">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
