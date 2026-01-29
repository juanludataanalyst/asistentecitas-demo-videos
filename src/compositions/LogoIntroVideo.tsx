import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { loadFont } from "@remotion/google-fonts/Sora";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const logoUrl = new URL('../assets/logo.svg', import.meta.url).href;

export const LogoIntroVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación de aparición con zoom
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 150, mass: 1.5 },
  });

  const logoScale = interpolate(logoSpring, [0, 1], [0.5, 1]);

  const logoOpacity = interpolate(
    frame,
    [0, 15],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={logoUrl}
        style={{
          width: "900px",
          height: "auto",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      />
    </AbsoluteFill>
  );
};
