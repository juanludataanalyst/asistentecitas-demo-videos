import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { loadFont } from "@remotion/google-fonts/Sora";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

// Test simple de las transiciones con logo
export const TestVideoTemplate = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring animation para el texto
  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

  // Spring para el logo con delay
  const logoSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 40,
  });

  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);
  const textScale = interpolate(textSpring, [0, 1], [0.95, 1]);
  const textY = interpolate(textSpring, [0, 1], [20, 0]);

  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoScale = interpolate(logoSpring, [0, 1], [0.9, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "90px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          opacity: textOpacity,
          transform: `scale(${textScale}) translateY(${textY}px)`,
        }}
      >
        antes de
      </h1>
      <div
        style={{
          width: "700px",
          height: "200px",
          backgroundColor: "#56ff06",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "48px",
          fontWeight: "bold",
          color: "#000",
          borderRadius: "20px",
        }}
      >
        LOGO
      </div>
    </AbsoluteFill>
  );
};
