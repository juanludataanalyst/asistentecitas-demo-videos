import { VideoTemplate } from "../components/VideoTemplate";

type Cliente2VideoProps = {
  logo: string;
  video1: string;
  video2: string;
  video3: string;
  audio?: string;
  soundText?: string;
  soundLogo?: string;
};

export const Cliente2Video = ({ logo, video1, video2, video3, audio, soundText, soundLogo }: Cliente2VideoProps) => {
  return (
    <VideoTemplate
      logo={logo}
      video1={video1}
      video2={video2}
      video3={video3}
      audio={audio}
      soundText={soundText}
      soundLogo={soundLogo}
      video1TrimEnd={7}
      video3StartFrom={4}
    />
  );
};
