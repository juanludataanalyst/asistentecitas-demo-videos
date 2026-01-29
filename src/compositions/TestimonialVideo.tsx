import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, staticFile, Series, Easing } from "remotion";
import { Video } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/Sora";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const logoUrl = new URL('../assets/logo.svg', import.meta.url).href;

// Logo superpuesto que cae (primeros 3 segundos)
const LogoOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación de caída con rebote
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 100, mass: 1 },
  });

  const logoY = interpolate(logoSpring, [0, 1], [-700, 300]);
  const logoScale = interpolate(logoSpring, [0, 0.6, 1], [2.5, 1.5, 1]);

  const logoOpacity = interpolate(
    frame,
    [0, 15, 75, 90],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        top: `${logoY}px`,
        left: "50%",
        transform: "translateX(-50%)",
        opacity: logoOpacity,
        zIndex: 10,
      }}
    >
      <img
        src={logoUrl}
        style={{
          width: "900px",
          height: "auto",
          transform: `scale(${logoScale})`,
        }}
      />
    </div>
  );
};

// CTA superpuesto últimos 3 segundos (como el original, adaptado a vertical)
const CtaOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const startFrame = durationInFrames - 90; // Últimos 3 segundos
  const localFrame = frame - startFrame; // Frame local dentro del CTA

  // No mostrar nada antes del startFrame
  const overlayOpacity = interpolate(
    frame,
    [startFrame - 1, startFrame],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  if (frame < startFrame) {
    return null;
  }

  // Animaciones de palabras
  const word1Spring = spring({
    frame: localFrame - 0,
    fps,
    config: { damping: 8, stiffness: 200, mass: 2 },
  });

  const word2Spring = spring({
    frame: localFrame - 8,
    fps,
    config: { damping: 8, stiffness: 200, mass: 2 },
  });

  const word3Spring = spring({
    frame: localFrame - 16,
    fps,
    config: { damping: 8, stiffness: 200, mass: 2 },
  });

  const word1Scale = interpolate(word1Spring, [0, 1], [3, 1]);
  const word2Scale = interpolate(word2Spring, [0, 1], [4, 1]);
  const word3Scale = interpolate(word3Spring, [0, 1], [3, 1]);

  const word1Y = interpolate(word1Spring, [0, 1], [100, 0]);
  const word2Y = interpolate(word2Spring, [0, 1], [150, 0]);
  const word3Y = interpolate(word3Spring, [0, 1], [100, 0]);

  // Logo
  const logoSpring = spring({
    frame: localFrame - 25,
    fps,
    config: { damping: 12, stiffness: 150, mass: 1.5 },
  });

  const logoScale = interpolate(logoSpring, [0, 1], [0.5, 1]);
  const logoOpacity = interpolate(
    localFrame,
    [25, 40],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // Confetti
  const confettiCount = 20;
  const confetti = Array.from({ length: confettiCount }, (_, i) => {
    const delay = i * 2;
    const confettiFrame = localFrame - delay;
    const progress = interpolate(confettiFrame, [0, 60], [0, 1], {
      extrapolateRight: "clamp",
    });

    const x = interpolate(progress, [0, 1], [50, 50 + Math.sin(i) * 40]);
    const y = interpolate(progress, [0, 1], [50, 50 + Math.cos(i) * 30 + progress * 20]);
    const rotation = interpolate(progress, [0, 1], [0, 360]);
    const opacity = interpolate(progress, [0, 0.3, 1], [0, 1, 0], {
      extrapolateRight: "clamp",
    });

    return { x, y, rotation, opacity, delay };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        overflow: "visible",
        zIndex: 10,
      }}
    >
      {/* Confetti */}
      {confetti.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: "12px",
            height: "12px",
            backgroundColor: i % 2 === 0 ? "#56ff06" : "#1a1a1a",
            opacity: c.opacity,
            transform: `rotate(${c.rotation}deg)`,
            borderRadius: i % 3 === 0 ? "50%" : "0",
          }}
        />
      ))}

      <h1
        style={{
          fontSize: "85px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          letterSpacing: "-0.04em",
          lineHeight: "1.2",
          position: "relative",
          zIndex: 10,
          margin: 0,
        }}
      >
        <span style={{
          transform: `scale(${word1Scale}) translateY(${word1Y}px)`,
          display: "inline-block",
        }}>
          Agenda tu
        </span>{" "}
        <span style={{
          transform: `scale(${word2Scale}) translateY(${word2Y}px)`,
          display: "inline-block",
          color: "#56ff06",
          fontWeight: "800",
        }}>
          demo
        </span>{" "}
        <span style={{
          transform: `scale(${word3Scale}) translateY(${word3Y}px)`,
          display: "inline-block",
        }}>
          hoy
        </span>
      </h1>

      <img
        src={logoUrl}
        style={{
          width: "650px",
          height: "auto",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          position: "relative",
          zIndex: 10,
        }}
      />
    </div>
  );
};

// Escena: Video de testimonio con overlays
const TestimonialScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Video
        src={staticFile("testimonio/handsome-barber.mp4")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <LogoOverlay />
      <CtaOverlay />
    </AbsoluteFill>
  );
};

export const TestimonialVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <TestimonialScene />
    </AbsoluteFill>
  );
};
