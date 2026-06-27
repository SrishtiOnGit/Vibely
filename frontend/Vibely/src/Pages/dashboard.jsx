import "../styles/dashboard.css";
import Dash_Nav from "../components/dash-nav.jsx";
import { useState } from "react";
import Soft from "../components/waves.jsx";

const Dashboard = () => {
  const SONG_LIBRARY = {
    sad: [
      { title: "Someone Like You", artist: "Adele" },
      { title: "Fix You", artist: "Coldplay" },
    ],
    motivated: [
      { title: "Lose Yourself", artist: "Eminem" },
      { title: "Eye of the Tiger", artist: "Survivor" },
    ],
    relaxed: [
      { title: "Sunflower", artist: "Post Malone" },
      { title: "Weightless", artist: "Marconi Union" },
    ],
    excited: [
      { title: "24K Magic", artist: "Bruno Mars" },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
    ],
    heartbroken: [
      { title: "Drivers License", artist: "Olivia Rodrigo" },
      { title: "Happier", artist: "Olivia Rodrigo" },
    ],
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood.id);
    setButtonText(`${mood.label} ⬇️`);
    setIsOpen(false);
    setErrorMsg("");
  };

  const handleGenerateVibe = () => {
    if (!selectedMood) {
      setErrorMsg("Please select a mood first!");
      setCurrentSong(null);
      return;
    }

    const songs = SONG_LIBRARY[selectedMood];
    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSong(songs[randomIndex]);
    setErrorMsg("");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
  const [buttonText, setButtonText] = useState("Select Mood ⬇️");
  const [currentSong, setCurrentSong] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const moods = [
    { id: "sad", label: "Sad" },
    { id: "motivated", label: "Motivated" },
    { id: "relaxed", label: "Relaxed" },
    { id: "excited", label: "Excited" },
    { id: "heartbroken", label: "Heartbroken" },
  ];
  return (
    <>
      <div className="dashboard">
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Soft />
        </div>

        <Dash_Nav />

        <div className="dashboard-content">
          <div className="dashboard-title">
            <h1>What's your vibe today?</h1>

            <p>
              "Tell us what's on your mind and we'll find the right soundtrack."
            </p>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
              {buttonText}
            </button>

            {isOpen && (
              <div className="dropdown-menu">
                {moods.map((mood) => (
                  <div
                    className="dropdown-item"
                    key={mood.id}
                    onClick={() => {
                      handleMoodSelect(mood);
                    }}
                  >
                    {mood.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="btn-generate" onClick={handleGenerateVibe}>
          Generate My Vibe
        </button>

        {errorMsg && <p className="error">{errorMsg}</p>}

        {currentSong && (
          <div className="song-card">
            <div className="song-icon">🎵</div>

            <h2>{currentSong.title}</h2>

            <p>{currentSong.artist}</p>

            <button className="listen-btn">Listen Now</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
