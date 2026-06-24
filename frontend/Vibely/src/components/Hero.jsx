import "../styles/Hero.css";
import Headphone from "../assets/headphone.svg";
import Head from "../assets/head.svg";
import Music from "../assets/music-note.svg";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Music That Matches</h1>
        <div className="hero-title-02">
          <TypeAnimation
            sequence={[
              "Your Vibe.",
              2000,
              "Your Mood.",
              2000,
              "Your Energy.",
              2000,
              "Your Taste.",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>

      <button
        className="hero-btn"
        onClick={() => {
          navigate("/login");
        }}
      >
        Start Listening
      </button>

      <div className="hero-img">
        <img src={Headphone} alt="Headphone" className="headphone" />
        <img src={Head} alt="Headphone" className="headphone-02" />
        <img src={Music} alt="Headphone" className="music" />
        <img src={Music} alt="Headphone" className="music-02" />
      </div>
    </section>
  );
};

export default Hero;
