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

// Componente para frases de texto con animación profesional palabra por palabra
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
  const textScale = interpolate(textSpring, [0, 1], [0.92, 1]);
  const textY = interpolate(textSpring, [0, 1], [30, 0]);

  // Glow effect animation
  const glowIntensity = interpolate(frame, [0, 30, 60], [0, 1, 0], {
    extrapolateRight: "clamp",
  });

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
          fontSize: "85px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          opacity: textOpacity,
          transform: `scale(${textScale}) translateY(${textY}px)`,
          letterSpacing: "-0.03em",
          textShadow: `0 0 ${glowIntensity * 20}px rgba(86, 255, 6, ${glowIntensity * 0.3})`,
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

// Componente para "agenda tu demo hoy" + logo con animación secuencial
const AgendaDemo: React.FC<{
  logo?: string;
}> = ({ logo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación secuencial palabra por palabra
  const word1Spring = spring({ frame: frame - 0, fps, config: { damping: 150, stiffness: 120 } });
  const word2Spring = spring({ frame: frame - 10, fps, config: { damping: 150, stiffness: 120 } });
  const word3Spring = spring({ frame: frame - 20, fps, config: { damping: 150, stiffness: 120 } });

  const word1Opacity = interpolate(word1Spring, [0, 1], [0, 1]);
  const word2Opacity = interpolate(word2Spring, [0, 1], [0, 1]);
  const word3Opacity = interpolate(word3Spring, [0, 1], [0, 1]);

  const word1Scale = interpolate(word1Spring, [0, 1], [0.85, 1]);
  const word2Scale = interpolate(word2Spring, [0, 1], [0.85, 1]);
  const word3Scale = interpolate(word3Spring, [0, 1], [0.85, 1]);

  const word1Y = interpolate(word1Spring, [0, 1], [30, 0]);
  const word2Y = interpolate(word2Spring, [0, 1], [30, 0]);
  const word3Y = interpolate(word3Spring, [0, 1], [30, 0]);

  const logoSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 200, stiffness: 100 },
    durationInFrames: 40,
  });

  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoScale = interpolate(logoSpring, [0, 1], [0.85, 1]);

  // Glow animation persistente
  const glowPulse = interpolate(frame, [10, 50, 90], [0, 1, 0.7], {
    extrapolateRight: "clamp",
  });

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
          fontSize: "105px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          letterSpacing: "-0.04em",
          lineHeight: "1.2",
        }}
      >
        <span style={{
          opacity: word1Opacity,
          transform: `scale(${word1Scale}) translateY(${word1Y}px)`,
          display: "inline-block",
        }}>
          Agenda tu
        </span>{" "}
        <span style={{
          opacity: word2Opacity,
          transform: `scale(${word2Scale}) translateY(${word2Y}px)`,
          display: "inline-block",
          color: "#56ff06",
          textShadow: `0 0 ${glowPulse * 35}px rgba(86, 255, 6, ${glowPulse * 0.5})`,
          fontWeight: "800",
        }}>
          demo
        </span>{" "}
        <span style={{
          opacity: word3Opacity,
          transform: `scale(${word3Scale}) translateY(${word3Y}px)`,
          display: "inline-block",
        }}>
          hoy
        </span>
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

// Componente para WhatsApp + texto con animación secuencial profesional
const WhatsAppWithText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fase 1: Texto aparece (frames 0-90)
  // Fase 2: WhatsApp aparece (frames 90-450)

  // Animación secuencial por línea
  const line1Spring = spring({ frame: frame - 0, fps, config: { damping: 150, stiffness: 120 } });
  const line2Spring = spring({ frame: frame - 15, fps, config: { damping: 150, stiffness: 120 } });

  const line1Opacity = interpolate(line1Spring, [0, 1], [0, 1]);
  const line2Opacity = interpolate(line2Spring, [0, 1], [0, 1]);

  const line1Scale = interpolate(line1Spring, [0, 1], [0.85, 1]);
  const line2Scale = interpolate(line2Spring, [0, 1], [0.85, 1]);

  const line1Y = interpolate(line1Spring, [0, 1], [30, 0]);
  const line2Y = interpolate(line2Spring, [0, 1], [30, 0]);

  // Fade out del texto completo
  const textFadeOut = interpolate(frame, [75, 90, 105], [1, 1, 0], {
    extrapolateRight: "clamp",
  });

  // Glow animations con timing escalonado
  const glow1 = interpolate(frame, [15, 45, 75], [0, 1, 0.4], { extrapolateRight: "clamp" });
  const glow2 = interpolate(frame, [30, 60, 90], [0, 1, 0.4], { extrapolateRight: "clamp" });

  // WhatsApp aparece y crece
  const whatsappScale = interpolate(frame, [90, 150], [0.3, 1.15], {
    extrapolateRight: "clamp",
  });
  const whatsappOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const whatsappStartFrame = 150;

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      {/* Texto con animación secuencial */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#1a1a1a",
            fontFamily,
            lineHeight: "1.4",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{
            display: "block",
            marginBottom: "20px",
            fontSize: "64px",
            opacity: line1Opacity * textFadeOut,
            transform: `scale(${line1Scale}) translateY(${line1Y}px)`,
          }}>
            Despreocúparte del{" "}
            <span style={{
              color: "#56ff06",
              textShadow: `0 0 ${glow1 * 35}px rgba(86, 255, 6, ${glow1 * 0.5})`,
              fontWeight: "800",
            }}>WhatsApp</span>
          </span>
          <span style={{
            display: "block",
            fontSize: "58px",
            opacity: line2Opacity * textFadeOut,
            transform: `scale(${line2Scale}) translateY(${line2Y}px)`,
          }}>
            y que una{" "}
            <span style={{
              color: "#56ff06",
              textShadow: `0 0 ${glow2 * 35}px rgba(86, 255, 6, ${glow2 * 0.5})`,
              fontWeight: "800",
            }}>IA</span>{" "}
            responda por ti{" "}
            <span style={{
              color: "#56ff06",
              textShadow: `0 0 ${glow2 * 35}px rgba(86, 255, 6, ${glow2 * 0.5})`,
              fontWeight: "800",
            }}>24/7</span>
          </span>
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

// Componente para Calendario + texto con animación secuencial
const CalendarWithText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación secuencial por línea
  const line1Spring = spring({ frame: frame - 0, fps, config: { damping: 150, stiffness: 120 } });
  const line2Spring = spring({ frame: frame - 12, fps, config: { damping: 150, stiffness: 120 } });

  const line1Opacity = interpolate(line1Spring, [0, 1], [0, 1]);
  const line2Opacity = interpolate(line2Spring, [0, 1], [0, 1]);

  const line1Scale = interpolate(line1Spring, [0, 1], [0.85, 1]);
  const line2Scale = interpolate(line2Spring, [0, 1], [0.85, 1]);

  const line1Y = interpolate(line1Spring, [0, 1], [30, 0]);
  const line2Y = interpolate(line2Spring, [0, 1], [30, 0]);

  // Fade out del texto
  const textFadeOut = interpolate(frame, [75, 90], [1, 0], {
    extrapolateRight: "clamp",
  });

  // Glow animations escalonadas
  const glow1 = interpolate(frame, [12, 42, 75], [0, 1, 0.4], { extrapolateRight: "clamp" });
  const glow2 = interpolate(frame, [24, 54, 75], [0, 1, 0.4], { extrapolateRight: "clamp" });

  const calendarScale = 0.95;
  const calendarOpacity = 1;
  const calendarStartFrame = 90;

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      {/* Texto con animación secuencial */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "75px",
            fontWeight: "bold",
            color: "#1a1a1a",
            fontFamily,
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{
            display: "block",
            marginBottom: "15px",
            opacity: line1Opacity * textFadeOut,
            transform: `scale(${line1Scale}) translateY(${line1Y}px)`,
          }}>
            Gestiona{" "}
            <span style={{
              color: "#56ff06",
              textShadow: `0 0 ${glow1 * 35}px rgba(86, 255, 6, ${glow1 * 0.5})`,
              fontWeight: "800",
            }}>todas tus citas</span>
          </span>
          <span style={{
            fontSize: "65px",
            opacity: line2Opacity * textFadeOut,
            transform: `scale(${line2Scale}) translateY(${line2Y}px)`,
          }}>
            desde un{" "}
            <span style={{
              color: "#56ff06",
              textShadow: `0 0 ${glow2 * 35}px rgba(86, 255, 6, ${glow2 * 0.5})`,
              fontWeight: "800",
            }}>calendario inteligente</span>
          </span>
        </h1>
      </div>

      {/* Calendario */}
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

// Componente para Dashboard + texto con animación secuencial
const DashboardWithText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación secuencial por línea
  const line1Spring = spring({ frame: frame - 0, fps, config: { damping: 150, stiffness: 120 } });
  const line2Spring = spring({ frame: frame - 12, fps, config: { damping: 150, stiffness: 120 } });

  const line1Opacity = interpolate(line1Spring, [0, 1], [0, 1]);
  const line2Opacity = interpolate(line2Spring, [0, 1], [0, 1]);

  const line1Scale = interpolate(line1Spring, [0, 1], [0.85, 1]);
  const line2Scale = interpolate(line2Spring, [0, 1], [0.85, 1]);

  const line1Y = interpolate(line1Spring, [0, 1], [30, 0]);
  const line2Y = interpolate(line2Spring, [0, 1], [30, 0]);

  // Fade out del texto
  const textFadeOut = interpolate(frame, [75, 90], [1, 0], {
    extrapolateRight: "clamp",
  });

  // Glow animations escalonadas
  const glow1 = interpolate(frame, [12, 42, 75], [0, 1, 0.4], { extrapolateRight: "clamp" });
  const glow2 = interpolate(frame, [24, 54, 75], [0, 1, 0.4], { extrapolateRight: "clamp" });

  const dashboardScale = 0.85;
  const dashboardOpacity = 1;
  const dashboardStartFrame = 90;

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      {/* Texto con animación secuencial */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "78px",
            fontWeight: "bold",
            color: "#1a1a1a",
            fontFamily,
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{
            display: "block",
            marginBottom: "15px",
            opacity: line1Opacity * textFadeOut,
            transform: `scale(${line1Scale}) translateY(${line1Y}px)`,
          }}>
            <span style={{
              color: "#56ff06",
              textShadow: `0 0 ${glow1 * 35}px rgba(86, 255, 6, ${glow1 * 0.5})`,
              fontWeight: "800",
            }}>Control total</span>{" "}
            de tu negocio
          </span>
          <span style={{
            fontSize: "68px",
            opacity: line2Opacity * textFadeOut,
            transform: `scale(${line2Scale}) translateY(${line2Y}px)`,
          }}>
            con{" "}
            <span style={{
              color: "#56ff06",
              textShadow: `0 0 ${glow2 * 35}px rgba(86, 255, 6, ${glow2 * 0.5})`,
              fontWeight: "800",
            }}>métricas en tiempo real</span>
          </span>
        </h1>
      </div>

      {/* Dashboard */}
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
