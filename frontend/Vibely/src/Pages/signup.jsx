import "../styles/signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup">
      <h1 className="signup-title">Find Your Vibe</h1>

      <p className="signup-description">
        "Create an account and discover music tailored to your taste."
      </p>

      <div className="input">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button className="signbtn" onClick={() => navigate("/login")}>
          Sign Up
        </button>

        <p className="signup-para">
          Already have an account? <NavLink to="/login">Log In</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
