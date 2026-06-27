import "../styles/dash-nav.css";
import { NavLink } from "react-router-dom";

const Dash_Nav = () => {
  return (
    <div className="dash-nav">
      <h1 className="dash-logo">Vibely</h1>

      <nav className="links">
        <ul className="nav-links">
          <input type="text" placeholder="Search" className="nav-input" />
          <li className="nav-links">
            <NavLink to="/playlists" className="nav-items">
              Playlists
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/profile" className="nav-items">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dash_Nav;
