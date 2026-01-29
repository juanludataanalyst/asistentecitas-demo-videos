import { AbsoluteFill, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { staticFile } from "remotion";

export const AudioTest = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <h1 style={{ fontSize: "100px", textAlign: "center", marginTop: "40%" }}>
        Audio Test
      </h1>
      <Audio src={staticFile("audios/summer-time.mp3")} volume={1} />
    </AbsoluteFill>
  );
};
