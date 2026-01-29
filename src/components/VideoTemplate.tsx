import {
  AbsoluteFill,
  Series,
  Img,
  useVideoConfig,
  Sequence,
  useCurrentFrame,
  interpolate,
  spring,
} from "remotion";
import { Video, Audio } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/Sora";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

// Componente para "antes de" - Animación premium AI
const IntroContent: React.FC<{
  logo: string;
  soundText?: string;
  soundLogo?: string;
}> = ({ logo, soundText, soundLogo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring animation para el texto - entrada suave y elegante
  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

  // Spring para el logo con delay - aparece después del texto
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
      <Img
        src={logo}
        style={{
          width: "700px",
          height: "auto",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      />
      {/* Sonido de marca al aparecer el texto (frame 0) */}
      {soundText && (
        <Audio src={soundText} />
      )}
      {/* Sonido de marca al aparecer el logo (frame 20) */}
      {soundLogo && (
        <Sequence from={20}>
          <Audio src={soundLogo} />
        </Sequence>
      )}
    </AbsoluteFill>
  );
};

// Componente para "después de" - Animación premium AI
const DespuesContent: React.FC<{
  logo: string;
  soundText?: string;
  soundLogo?: string;
}> = ({ logo, soundText, soundLogo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

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
        después de
      </h1>
      <Img
        src={logo}
        style={{
          width: "700px",
          height: "auto",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      />
      {soundText && <Audio src={soundText} />}
      {soundLogo && (
        <Sequence from={20}>
          <Audio src={soundLogo} />
        </Sequence>
      )}
    </AbsoluteFill>
  );
};

// Componente para "agenda tu demo hoy" - Animación premium AI
const AgendaDemoContent: React.FC<{
  logo: string;
  soundText?: string;
  soundLogo?: string;
}> = ({ logo, soundText, soundLogo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

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
        agenda tu demo hoy
      </h1>
      <Img
        src={logo}
        style={{
          width: "700px",
          height: "auto",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      />
      {soundText && <Audio src={soundText} />}
      {soundLogo && (
        <Sequence from={20}>
          <Audio src={soundLogo} />
        </Sequence>
      )}
    </AbsoluteFill>
  );
};

type VideoTemplateProps = {
  logo: string;
  video1: string;
  video2: string;
  video3: string;
  video1TrimEnd?: number; // Segundos a recortar al final del video 1
  video3StartFrom?: number; // Segundos donde empieza el video 3
  audio?: string; // Archivo de audio opcional para el inicio
  audioFinal?: string; // Archivo de audio opcional para la parte final
  vozParte3?: string; // Archivo de audio opcional para la parte 3
  includeAgendaDemo?: boolean; // Incluir secuencia "agenda tu demo hoy"
  soundText?: string; // Sonido de marca para aparición de texto
  soundLogo?: string; // Sonido de marca para aparición de logo
  musicaFondo?: string; // Música de fondo para todo el video
  musicaParte1?: string; // Música para la parte 1 (VIDEO PARTE 1)
  musicaParte2EnAdelante?: string; // Música desde después de "después de" hasta el final
};

export const VideoTemplate: React.FC<VideoTemplateProps> = ({
  logo,
  video1,
  video2,
  video3,
  video1TrimEnd = 7,
  video3StartFrom = 4,
  audio,
  audioFinal,
  vozParte3,
  includeAgendaDemo = true,
  soundText,
  soundLogo,
  musicaFondo,
  musicaParte1,
  musicaParte2EnAdelante,
}) => {
  const { fps } = useVideoConfig();
  // const frame = useCurrentFrame(); // Unused - kept for potential future use

  // Calcular cuándo empieza el video 3 dinámicamente
  const agendaDemoFrames = includeAgendaDemo ? 60 : 0;
  const video3StartFrame = 60 + (video1TrimEnd * fps) + 60 + 180 + agendaDemoFrames;

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <Series>
        {/* 1. INTRO: "antes de" + logo (2 segundos) */}
        <Series.Sequence durationInFrames={60}>
          <IntroContent logo={logo} soundText={soundText} soundLogo={soundLogo} />
        </Series.Sequence>

        {/* 2. VÍDEO PARTE 1 */}
        <Series.Sequence durationInFrames={video1TrimEnd * 30}>
          <AbsoluteFill style={{ backgroundColor: "black" }}>
            <Video
              src={video1}
              trimAfter={video1TrimEnd * fps}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </AbsoluteFill>
        </Series.Sequence>

        {/* 3. TRANSICIÓN: "después de" + logo (2 segundos) */}
        <Series.Sequence durationInFrames={60}>
          <DespuesContent logo={logo} soundText={soundText} soundLogo={soundLogo} />
        </Series.Sequence>

        {/* 4. VÍDEO PARTE 2 */}
        <Series.Sequence durationInFrames={180}>
          <AbsoluteFill style={{ backgroundColor: "black" }}>
            <Video
              src={video2}
              muted={true}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </AbsoluteFill>
        </Series.Sequence>

        {/* 5. "AGENDA TU DEMO HOY" + logo */}
        {includeAgendaDemo && (
          <Series.Sequence durationInFrames={60}>
            <AgendaDemoContent logo={logo} soundText={soundText} soundLogo={soundLogo} />
          </Series.Sequence>
        )}

        {/* 6. VÍDEO PARTE 3 con logo superpuesto */}
        <Series.Sequence durationInFrames={120}>
          <AbsoluteFill style={{ backgroundColor: "black" }}>
            <Video
              src={video3}
              trimBefore={video3StartFrom * fps}
              muted={true}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Img
              src={logo}
              style={{
                position: "absolute",
                top: "80px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "800px",
                height: "auto",
              }}
            />
          </AbsoluteFill>
        </Series.Sequence>

      </Series>

      {/* Audio de whatsapp (suena durante el video 1) */}
      {audio && (
        <Sequence from={60} durationInFrames={video1TrimEnd * fps}>
          <Audio src={audio} volume={1.0} />
        </Sequence>
      )}

      {/* Audio de la parte final (empieza con el video 3) */}
      {audioFinal && (
        <Sequence from={video3StartFrame} durationInFrames={120}>
          <Audio src={audioFinal} volume={1.0} />
        </Sequence>
      )}

      {/* Voz "despreocúpate hombre" al inicio de la parte 3 */}
      {vozParte3 && (
        <Sequence from={video3StartFrame} durationInFrames={120}>
          <Audio src={vozParte3} volume={10.0} />
        </Sequence>
      )}

      {/* Música de fondo durante todo el video */}
      {musicaFondo && <Audio src={musicaFondo} />}

      {/* Música para la parte 1 (VIDEO PARTE 1) */}
      {musicaParte1 && (
        <Sequence from={60} durationInFrames={video1TrimEnd * fps}>
          <Audio src={musicaParte1} volume={0.7} />
        </Sequence>
      )}

      {/* Música desde después de "después de" hasta el final */}
      {musicaParte2EnAdelante && (
        <Sequence from={60 + (video1TrimEnd * fps) + 60} durationInFrames={180 + (includeAgendaDemo ? 60 : 0) + 120}>
          <Audio src={musicaParte2EnAdelante} volume={1.0} />
        </Sequence>
      )}
    </AbsoluteFill>
  );
};
