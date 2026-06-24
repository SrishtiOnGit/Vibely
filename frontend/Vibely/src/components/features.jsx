import "../styles/features.css";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Personalised Recommendations",
      description:
        "Discover songs tailored to your mood, taste, and listening habits.",
    },
    {
      id: 2,
      title: "Smart Playist",
      description:
        "Generate playlists instantly without spending hours searching for songs.",
    },
    {
      id: 3,
      title: "Mood-Based Listening",
      description:
        "Find tracks that match your vibe—whether you're studying, relaxing, or working out.",
    },
    {
      id: 4,
      title: "Save Your Favourites",
      description:
        "Build your personal collection of songs, albums, and artists.",
    },
  ];
  return (
    <div className="features" id="features">
      <h1 className="features-title">Our Leading Features</h1>

      <div className="features-container">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
