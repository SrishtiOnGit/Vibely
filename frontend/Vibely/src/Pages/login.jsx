import "../styles/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <h1 className="login-title">Tune In</h1>

      <p className="login-description">“Pick up where your sound left off.”</p>

      <div className="input">
        <input
          type="email"
          value={username}
          change={(e) => setUsername(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          change={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login-btn" onClick={() => navigate("/dashboard")}>
          Login
        </button>

        <p className="login-para">
          Don't have an account?{" "}
          <NavLink to="/signup" className="login-link">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
