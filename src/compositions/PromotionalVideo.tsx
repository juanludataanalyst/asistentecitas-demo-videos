import { AbsoluteFill, Series, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence } from "remotion";
import { Audio } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/Sora";
import { WhatsAppCitaPromo } from "./WhatsAppCitaPromo";
import { CalendarComplete } from "./CalendarComplete";
import { DashboardComplete } from "./DashboardComplete";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const logoUrl = new URL('../assets/logo.svg', import.meta.url).href;

// Componente para intro con solo el logo
const LogoOnly: React.FC<{
  logo?: string;
}> = ({ logo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoScale = interpolate(logoSpring, [0, 1], [0.85, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {logo && (
        <img
          src={logo}
          style={{
            width: "600px",
            height: "auto",
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

// Componente reutilizable para transiciones con logo
const LogoTransition: React.FC<{
  children: React.ReactNode;
  logo?: string;
  playSounds?: boolean;
}> = ({ children, logo, playSounds = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

  const logoSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 40,
  });

  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);
  const textScale = interpolate(textSpring, [0, 1], [0.95, 1]);
  const textY = interpolate(textSpring, [0, 1], [20, 0]);

  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoScale = interpolate(logoSpring, [0, 1], [0.85, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          opacity: textOpacity,
          transform: `scale(${textScale}) translateY(${textY}px)`,
        }}
      >
        {children}
      </h1>
      {logo && (
        <img
          src={logo}
          style={{
            width: "600px",
            height: "auto",
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        />
      )}
      {playSounds && (
        <>
          {/* <Audio src="/audios/ui_sound.mp3 /> */}
          {/* <Sequence from={15}>
            <Audio src="/audios/melodia_ui.mp3" />
          </Sequence> */}
        </>
      )}
    </AbsoluteFill>
  );
};

// Componente para frases de texto
const TextSlide: React.FC<{
  children: React.ReactNode;
  subtitle?: React.ReactNode;
}> = ({ children, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);
  const textScale = interpolate(textSpring, [0, 1], [0.95, 1]);
  const textY = interpolate(textSpring, [0, 1], [15, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "120px",
      }}
    >
      <h1
        style={{
          fontSize: "75px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          opacity: textOpacity,
          transform: `scale(${textScale}) translateY(${textY}px)`,
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </h1>
      {subtitle && (
        <p
          style={{
            fontSize: "32px",
            color: "#666",
            fontFamily,
            textAlign: "center",
            opacity: textOpacity,
            transform: `scale(${textScale}) translateY(${textY}px)`,
          }}
        >
          {subtitle}
        </p>
      )}
    </AbsoluteFill>
  );
};

// Componente para "agenda tu demo hoy" + logo
const AgendaDemo: React.FC<{
  logo?: string;
}> = ({ logo }) => {
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
        gap: "70px",
      }}
    >
      <h1
        style={{
          fontSize: "100px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          opacity: textOpacity,
          transform: `scale(${textScale}) translateY(${textY}px)`,
          letterSpacing: "-0.03em",
        }}
      >
        agenda tu <span style={{ color: "#56ff06" }}>demo</span> hoy
      </h1>
      {logo && (
        <img
          src={logo}
          style={{
            width: "700px",
            height: "auto",
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

// Componente para WhatsApp + texto (sin texto final "contestando 24/7")
const WhatsAppWithText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fase 1: Texto aparece (frames 0-90)
  // Fase 2: WhatsApp aparece (frames 90-450)

  // Texto principal aparece y se queda un poco
  const textOpacity = interpolate(frame, [0, 30, 90, 105], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  // WhatsApp aparece y crece con más zoom - más rápido y más grande
  const whatsappScale = interpolate(frame, [90, 150], [0.3, 1.15], {
    extrapolateRight: "clamp",
  });
  const whatsappOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

  const textScale = interpolate(textSpring, [0, 1], [0.95, 1]);
  const textY = interpolate(textSpring, [0, 1], [15, 0]);

  // Las animaciones del WhatsApp empiezan después de que termine de aparecer (frame 150)
  const whatsappStartFrame = 150;

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      {/* Texto centrado como en Calendar y Dashboard */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: textOpacity,
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "65px",
            fontWeight: "bold",
            color: "#1a1a1a",
            fontFamily,
            transform: `scale(${textScale}) translateY(${textY}px)`,
            lineHeight: "1.3",
          }}
        >
          Despreocúparte del <span style={{ color: "#56ff06" }}>whatsapp</span> y que una <span style={{ color: "#56ff06" }}>IA</span> responda por ti como un humano las <span style={{ color: "#56ff06" }}>24 horas</span> del día
        </h1>
      </div>

      {/* WhatsApp que aparece y crece en el centro */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${whatsappScale})`,
          opacity: whatsappOpacity,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WhatsAppCitaPromo showPromoMessage={true} startFrame={whatsappStartFrame} />
      </div>
    </AbsoluteFill>
  );
};

// Componente para Calendario + texto que desaparece
const CalendarWithText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Texto desaparece gradualmente (como WhatsApp)
  const textOpacity = interpolate(frame, [0, 80, 90], [1, 1, 0], {
    extrapolateRight: "clamp",
  });

  // Calendario completamente visible desde frame 90
  const calendarScale = 0.95;
  const calendarOpacity = 1;

  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

  const textScale = interpolate(textSpring, [0, 1], [0.95, 1]);
  const textY = interpolate(textSpring, [0, 1], [15, 0]);

  // Las animaciones del calendario empiezan en frame 90
  const calendarStartFrame = 90;

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      {/* Texto centrado */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: textOpacity,
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "65px",
            fontWeight: "bold",
            color: "#1a1a1a",
            fontFamily,
            transform: `scale(${textScale}) translateY(${textY}px)`,
          }}
        >
          y apuntándolo todo aquí
        </h1>
        <h1
          style={{
            fontSize: "65px",
            fontWeight: "bold",
            color: "#1a1a1a",
            fontFamily,
            marginTop: "15px",
            transform: `scale(${textScale}) translateY(${textY}px)`,
          }}
        >
          para que tú puedas verlo
        </h1>
      </div>

      {/* Calendario que crece en el centro */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${calendarScale})`,
          opacity: calendarOpacity,
          width: "100%",
          height: "100%",
        }}
      >
        <CalendarComplete startFrame={calendarStartFrame} />
      </div>
    </AbsoluteFill>
  );
};

// Componente para Dashboard + texto que desaparece
const DashboardWithText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Texto desaparece gradualmente (como WhatsApp)
  const textOpacity = interpolate(frame, [0, 80, 90], [1, 1, 0], {
    extrapolateRight: "clamp",
  });

  // Dashboard completamente visible desde frame 90
  const dashboardScale = 0.85;
  const dashboardOpacity = 1;

  const textSpring = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 45,
  });

  const textScale = interpolate(textSpring, [0, 1], [0.95, 1]);
  const textY = interpolate(textSpring, [0, 1], [15, 0]);

  // Las animaciones del dashboard empiezan en frame 90
  const dashboardStartFrame = 90;

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      {/* Texto centrado */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: textOpacity,
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "65px",
            fontWeight: "bold",
            color: "#1a1a1a",
            fontFamily,
            transform: `scale(${textScale}) translateY(${textY}px)`,
          }}
        >
          Llevar el <span style={{ color: "#56ff06" }}>control</span> de tu negocio
        </h1>
        <h1
          style={{
            fontSize: "65px",
            fontWeight: "bold",
            color: "#1a1a1a",
            fontFamily,
            marginTop: "15px",
            transform: `scale(${textScale}) translateY(${textY}px)`,
          }}
        >
          de manera <span style={{ color: "#56ff06" }}>automática</span>
        </h1>
      </div>

      {/* Dashboard que crece en el centro */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${dashboardScale})`,
          opacity: dashboardOpacity,
          width: "100%",
          height: "100%",
        }}
      >
        <DashboardComplete startFrame={dashboardStartFrame} />
      </div>
    </AbsoluteFill>
  );
};

export const PromotionalVideo = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      {/* Música de fondo durante todo el video */}
      {/* <Audio src="/audios/happy-piano.mp3" volume={0.3} /> */}

      <Series>
        {/* 1. INTRO: Logo asistentecitas (2 segundos = 60 frames) */}
        <Series.Sequence durationInFrames={60}>
          <AbsoluteFill>
            <LogoOnly logo={logoUrl} />
          </AbsoluteFill>
        </Series.Sequence>

        {/* 2. "imagina" (2 segundos = 60 frames) */}
        <Series.Sequence durationInFrames={60}>
          <TextSlide>
            imagina...
          </TextSlide>
        </Series.Sequence>

        {/* 3. WhatsApp + texto (16 segundos = 480 frames) */}
        <Series.Sequence durationInFrames={480}>
          <WhatsAppWithText />
        </Series.Sequence>

        {/* 4. "y apuntándolo todo aquí..." + Calendario (10 segundos = 300 frames) */}
        <Series.Sequence durationInFrames={300}>
          <CalendarWithText />
        </Series.Sequence>

        {/* 5. "Llevar el control..." + Dashboard (10 segundos = 300 frames) */}
        <Series.Sequence durationInFrames={300}>
          <DashboardWithText />
        </Series.Sequence>

        {/* 6. Outro: "agenda tu demo hoy" + logo (4 segundos = 120 frames) */}
        <Series.Sequence durationInFrames={120}>
          <AbsoluteFill>
            <AgendaDemo logo={logoUrl} />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
