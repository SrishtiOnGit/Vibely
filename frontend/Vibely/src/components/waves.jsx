import SoftAurora from "../components/SoftAurora";

const Soft = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <SoftAurora
        speed={0.6}
        scale={1.5}
        brightness={1}
        color1="#ff00ff"
        color2="#00ffff"
        noiseFrequency={2.5}
        noiseAmplitude={1}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction
        mouseInfluence={0.25}
      />
    </div>
  );
};

export default Soft;
