import "../styles/Hero.css";
import Headphone from "../assets/headphone.svg";
import Head from "../assets/head.svg";
import Music from "../assets/music-note.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Music That Matches</h1>
        <h1 className="hero-title-02">Your Vibe..</h1>
      </div>

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
