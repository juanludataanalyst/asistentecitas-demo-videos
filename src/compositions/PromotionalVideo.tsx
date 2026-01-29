import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, staticFile, Easing, Series } from "remotion";
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

  const zoomProgress = interpolate(
    frame,
    [0, 45],
    [0.8, 1],
    {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp",
    }
  );

  const logoOpacity = interpolate(
    frame,
    [0, 20],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

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
            transform: `scale(${zoomProgress})`,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

// ESCENA 1: "imagina..." con shockwaves
const ImaginaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const explosionProgress = interpolate(
    frame,
    [0, 25, 50],
    [0, 1, 1],
    {
      easing: Easing.out(Easing.exp),
      extrapolateRight: "clamp",
    }
  );

  const textOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const textScale = interpolate(explosionProgress, [0, 1], [2, 1]);
  const textY = interpolate(explosionProgress, [0, 1], [100, 0]);
  const textRotation = interpolate(explosionProgress, [0, 1], [-5, 0]);

  // Shockwaves centrados
  const shockwave1Scale = interpolate(
    frame,
    [0, 25, 50],
    [0.5, 1.8, 2.5],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave1Opacity = interpolate(
    frame,
    [0, 15, 30],
    [0.6, 0.3, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Scale = interpolate(
    frame,
    [5, 30, 55],
    [0.5, 1.8, 2.5],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Opacity = interpolate(
    frame,
    [5, 20, 35],
    [0.5, 0.25, 0],
    {
      extrapolateRight: "clamp",
    }
  );

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
        overflow: "visible",
      }}
    >
      {/* Shockwaves centrados */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "8px solid #56ff06",
        opacity: shockwave1Opacity,
        transform: `scale(${shockwave1Scale})`,
        top: "50%",
        left: "50%",
        marginLeft: "-50%",
        marginTop: "-50%",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "6px solid #56ff06",
        opacity: shockwave2Opacity,
        transform: `scale(${shockwave2Scale})`,
        top: "50%",
        left: "50%",
        marginLeft: "-50%",
        marginTop: "-50%",
        pointerEvents: "none",
      }} />

      <h1
        style={{
          fontSize: "85px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          opacity: textOpacity,
          transform: `scale(${textScale}) translateY(${textY}px) rotate(${textRotation}deg)`,
          letterSpacing: "-0.03em",
          position: "relative",
          zIndex: 10,
        }}
      >
        imagina...
      </h1>
    </AbsoluteFill>
  );
};

// ESCENA 2: WhatsApp - Texto con fade profesional a componente
const WhatsAppScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Spring = spring({
    frame: frame - 0,
    fps,
    config: { damping: 10, stiffness: 200, mass: 1.5 },
  });

  const line2Spring = spring({
    frame: frame - 12,
    fps,
    config: { damping: 10, stiffness: 200, mass: 1.5 },
  });

  const line1Opacity = interpolate(line1Spring, [0, 1], [0, 1]);
  const line2Opacity = interpolate(line2Spring, [0, 1], [0, 1]);

  const line1Scale = interpolate(line1Spring, [0, 1], [0.7, 1]);
  const line2Scale = interpolate(line2Spring, [0, 1], [0.7, 1]);

  const line1Y = interpolate(line1Spring, [0, 1], [50, 0]);
  const line2Y = interpolate(line2Spring, [0, 1], [50, 0]);

  // Texto se desvanece profesionalmente
  const textFadeOut = interpolate(
    frame,
    [75, 90, 105],
    [1, 1, 0],
    {
      easing: Easing.in(Easing.cubic),
      extrapolateRight: "clamp",
    }
  );

  // Shockwaves desde la izquierda
  const shockwave1Scale = interpolate(
    frame,
    [0, 25, 50],
    [0.4, 1.5, 2.2],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave1Opacity = interpolate(
    frame,
    [0, 20, 35],
    [0.6, 0.3, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Scale = interpolate(
    frame,
    [8, 33, 58],
    [0.4, 1.5, 2.2],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Opacity = interpolate(
    frame,
    [8, 28, 43],
    [0.5, 0.25, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  // WhatsApp aparece DURANTE el fade del texto (transición profesional)
  const whatsappProgress = interpolate(
    frame,
    [95, 155],
    [0, 1],
    {
      easing: Easing.out(Easing.exp),
      extrapolateRight: "clamp",
    }
  );

  const whatsappScale = interpolate(whatsappProgress, [0, 1], [0.1, 1.15]);
  const whatsappOpacity = interpolate(
    frame,
    [95, 125],
    [0, 1],
    {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: "clamp",
    }
  );

  const whatsappStartFrame = 160;

  return (
    <AbsoluteFill style={{ backgroundColor: "white", overflow: "visible" }}>
      {/* Shockwaves desde la izquierda */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "80%",
        borderRadius: "50%",
        border: "8px solid #56ff06",
        opacity: shockwave1Opacity,
        transform: `scale(${shockwave1Scale})`,
        top: "50%",
        left: "-20%",
        marginTop: "-40%",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        width: "95%",
        height: "75%",
        borderRadius: "50%",
        border: "6px solid #56ff06",
        opacity: shockwave2Opacity,
        transform: `scale(${shockwave2Scale})`,
        top: "50%",
        left: "-15%",
        marginTop: "-37.5%",
        pointerEvents: "none",
      }} />

      {/* Texto que desaparece profesionalmente */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          opacity: textFadeOut,
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
            opacity: line1Opacity,
            transform: `scale(${line1Scale}) translateY(${line1Y}px)`,
          }}>
            Despreocúparte del{" "}
            <span style={{
              color: "#56ff06",
              fontWeight: "800",
            }}>WhatsApp</span>
          </span>
          <span style={{
            display: "block",
            fontSize: "58px",
            opacity: line2Opacity,
            transform: `scale(${line2Scale}) translateY(${line2Y}px)`,
          }}>
            y que una{" "}
            <span style={{
              color: "#56ff06",
              fontWeight: "800",
            }}>IA</span>{" "}
            responda por ti{" "}
            <span style={{
              color: "#56ff06",
              fontWeight: "800",
            }}>{"24/7"}</span>
          </span>
        </h1>
      </div>

      {/* WhatsApp que aparece durante la transición */}
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

// ESCENA 3: Calendario - Texto + Componente sin gap
const CalendarScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Spring = spring({
    frame: frame - 0,
    fps,
    config: { damping: 10, stiffness: 200, mass: 1.5 },
  });

  const line2Spring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 200, mass: 1.5 },
  });

  const line1Opacity = interpolate(line1Spring, [0, 1], [0, 1]);
  const line2Opacity = interpolate(line2Spring, [0, 1], [0, 1]);

  const line1Scale = interpolate(line1Spring, [0, 1], [0.7, 1]);
  const line2Scale = interpolate(line2Spring, [0, 1], [0.7, 1]);

  const line1Y = interpolate(line1Spring, [0, 1], [50, 0]);
  const line2Y = interpolate(line2Spring, [0, 1], [50, 0]);

  // Texto se desvanece frames 40-52
  const textFadeOut = interpolate(
    frame,
    [40, 47, 52],
    [1, 1, 0],
    {
      easing: Easing.in(Easing.cubic),
      extrapolateRight: "clamp",
    }
  );

  // Shockwaves desde arriba
  const shockwave1Scale = interpolate(
    frame,
    [0, 25, 50],
    [0.4, 1.6, 2.3],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave1Opacity = interpolate(
    frame,
    [0, 20, 40],
    [0.5, 0.25, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Scale = interpolate(
    frame,
    [10, 35, 60],
    [0.4, 1.6, 2.3],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Opacity = interpolate(
    frame,
    [10, 30, 50],
    [0.4, 0.2, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  // Calendario VISIBLE desde frame 52 (cuando termina el texto)
  const calendarScale = interpolate(
    frame,
    [52, 112],
    [0.85, 0.95],
    {
      easing: Easing.out(Easing.exp),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    }
  );

  const calendarStartFrame = 60;

  return (
    <AbsoluteFill style={{ backgroundColor: "white", overflow: "visible" }}>
      {/* Shockwaves desde arriba */}
      <div style={{
        position: "absolute",
        width: "80%",
        height: "80%",
        borderRadius: "50%",
        border: "7px solid #56ff06",
        opacity: shockwave1Opacity,
        transform: `scale(${shockwave1Scale})`,
        top: "-20%",
        left: "50%",
        marginLeft: "-40%",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        width: "85%",
        height: "85%",
        borderRadius: "50%",
        border: "5px solid #56ff06",
        opacity: shockwave2Opacity,
        transform: `scale(${shockwave2Scale})`,
        top: "-15%",
        left: "50%",
        marginLeft: "-42.5%",
        pointerEvents: "none",
      }} />

      {/* Texto que desaparece */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          opacity: textFadeOut,
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
            opacity: line1Opacity,
            transform: `scale(${line1Scale}) translateY(${line1Y}px)`,
          }}>
            Gestiona{" "}
            <span style={{
              color: "#56ff06",
              fontWeight: "800",
            }}>todas tus citas</span>
          </span>
          <span style={{
            fontSize: "65px",
            opacity: line2Opacity,
            transform: `scale(${line2Scale}) translateY(${line2Y}px)`,
          }}>
            desde un{" "}
            <span style={{
              color: "#56ff06",
              fontWeight: "800",
            }}>{"calendario inteligente"}</span>
          </span>
        </h1>
      </div>

      {/* Calendario visible desde frame 52 (sin gap) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${calendarScale})`,
          width: "100%",
          height: "100%",
        }}
      >
        <CalendarComplete startFrame={calendarStartFrame} />
      </div>
    </AbsoluteFill>
  );
};

// ESCENA 4: Dashboard - Texto con fade profesional a componente
const DashboardScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Spring = spring({
    frame: frame - 0,
    fps,
    config: { damping: 10, stiffness: 200, mass: 1.5 },
  });

  const line2Spring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 200, mass: 1.5 },
  });

  const line1Opacity = interpolate(line1Spring, [0, 1], [0, 1]);
  const line2Opacity = interpolate(line2Spring, [0, 1], [0, 1]);

  const line1Scale = interpolate(line1Spring, [0, 1], [0.7, 1]);
  const line2Scale = interpolate(line2Spring, [0, 1], [0.7, 1]);

  const line1Y = interpolate(line1Spring, [0, 1], [50, 0]);
  const line2Y = interpolate(line2Spring, [0, 1], [50, 0]);

  // Texto se desvanece frames 40-52
  const textFadeOut = interpolate(
    frame,
    [40, 47, 52],
    [1, 1, 0],
    {
      easing: Easing.in(Easing.cubic),
      extrapolateRight: "clamp",
    }
  );

  // Shockwaves desde la derecha
  const shockwave1Scale = interpolate(
    frame,
    [0, 25, 50],
    [0.4, 1.5, 2.2],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave1Opacity = interpolate(
    frame,
    [0, 20, 35],
    [0.6, 0.3, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Scale = interpolate(
    frame,
    [8, 33, 58],
    [0.4, 1.5, 2.2],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Opacity = interpolate(
    frame,
    [8, 28, 43],
    [0.5, 0.25, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  // Dashboard VISIBLE desde frame 52 (cuando termina el texto)
  const dashboardScale = interpolate(
    frame,
    [52, 112],
    [0.80, 0.85],
    {
      easing: Easing.out(Easing.exp),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    }
  );

  const dashboardStartFrame = 60;

  return (
    <AbsoluteFill style={{ backgroundColor: "white", overflow: "visible" }}>
      {/* Shockwaves desde la derecha */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "80%",
        borderRadius: "50%",
        border: "8px solid #56ff06",
        opacity: shockwave1Opacity,
        transform: `scale(${shockwave1Scale})`,
        top: "50%",
        right: "-20%",
        marginTop: "-40%",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        width: "95%",
        height: "75%",
        borderRadius: "50%",
        border: "6px solid #56ff06",
        opacity: shockwave2Opacity,
        transform: `scale(${shockwave2Scale})`,
        top: "50%",
        right: "-15%",
        marginTop: "-37.5%",
        pointerEvents: "none",
      }} />

      {/* Texto que desaparece profesionalmente */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          opacity: textFadeOut,
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
            opacity: line1Opacity,
            transform: `scale(${line1Scale}) translateY(${line1Y}px)`,
          }}>
            <span style={{
              color: "#56ff06",
              fontWeight: "800",
            }}>Control total</span>{" "}
            de tu negocio
          </span>
          <span style={{
            fontSize: "68px",
            opacity: line2Opacity,
            transform: `scale(${line2Scale}) translateY(${line2Y}px)`,
          }}>
            con{" "}
            <span style={{
              color: "#56ff06",
              fontWeight: "800",
            }}>{"métricas en tiempo real"}</span>
          </span>
        </h1>
      </div>

      {/* Dashboard visible desde frame 52 (sin gap) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${dashboardScale})`,
          width: "100%",
          height: "100%",
        }}
      >
        <DashboardComplete startFrame={dashboardStartFrame} />
      </div>
    </AbsoluteFill>
  );
};

// ESCENA 5: "Pide tu demo hoy"
const CtaScene: React.FC<{
  logo?: string;
}> = ({ logo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const word1Spring = spring({
    frame: frame - 0,
    fps,
    config: { damping: 8, stiffness: 200, mass: 2 },
  });

  const word2Spring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 8, stiffness: 200, mass: 2 },
  });

  const word3Spring = spring({
    frame: frame - 16,
    fps,
    config: { damping: 8, stiffness: 200, mass: 2 },
  });

  const word1Scale = interpolate(word1Spring, [0, 1], [3, 1]);
  const word2Scale = interpolate(word2Spring, [0, 1], [4, 1]);
  const word3Scale = interpolate(word3Spring, [0, 1], [3, 1]);

  const word1Y = interpolate(word1Spring, [0, 1], [100, 0]);
  const word2Y = interpolate(word2Spring, [0, 1], [150, 0]);
  const word3Y = interpolate(word3Spring, [0, 1], [100, 0]);

  const logoSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 12, stiffness: 150, mass: 1.5 },
  });

  const logoScale = interpolate(logoSpring, [0, 1], [0.5, 1]);
  const logoOpacity = interpolate(
    frame,
    [25, 40],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // Confetti
  const confettiCount = 20;
  const confetti = Array.from({ length: confettiCount }, (_, i) => {
    const delay = i * 2;
    const confettiFrame = frame - delay;
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

  // 3 Shockwaves desde abajo
  const shockwave1Scale = interpolate(
    frame,
    [0, 30, 60],
    [0.3, 1.6, 2.5],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave1Opacity = interpolate(
    frame,
    [0, 25, 45],
    [0.7, 0.3, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Scale = interpolate(
    frame,
    [5, 35, 65],
    [0.3, 1.6, 2.5],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave2Opacity = interpolate(
    frame,
    [5, 30, 50],
    [0.6, 0.25, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave3Scale = interpolate(
    frame,
    [10, 40, 70],
    [0.3, 1.6, 2.5],
    {
      extrapolateRight: "clamp",
    }
  );

  const shockwave3Opacity = interpolate(
    frame,
    [10, 35, 55],
    [0.5, 0.2, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "70px",
        overflow: "visible",
      }}
    >
      {/* 3 Shockwaves desde abajo */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "10px solid #56ff06",
        opacity: shockwave1Opacity,
        transform: `scale(${shockwave1Scale})`,
        bottom: "-30%",
        left: "50%",
        marginLeft: "-50%",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        width: "95%",
        height: "95%",
        borderRadius: "50%",
        border: "8px solid #56ff06",
        opacity: shockwave2Opacity,
        transform: `scale(${shockwave2Scale})`,
        bottom: "-25%",
        left: "50%",
        marginLeft: "-47.5%",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        width: "90%",
        height: "90%",
        borderRadius: "50%",
        border: "6px solid #56ff06",
        opacity: shockwave3Opacity,
        transform: `scale(${shockwave3Scale})`,
        bottom: "-20%",
        left: "50%",
        marginLeft: "-45%",
        pointerEvents: "none",
      }} />

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
          fontSize: "105px",
          fontWeight: "bold",
          color: "#1a1a1a",
          fontFamily,
          textAlign: "center",
          letterSpacing: "-0.04em",
          lineHeight: "1.2",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span style={{
          transform: `scale(${word1Scale}) translateY(${word1Y}px)`,
          display: "inline-block",
        }}>
          Pide tu
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

      {logo && (
        <img
          src={logo}
          style={{
            width: "700px",
            height: "auto",
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            position: "relative",
            zIndex: 10,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

export const PromotionalVideo: React.FC = () => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const audioVolume = interpolate(
    frame,
    [durationInFrames - 90, durationInFrames - 10],
    [1, 0],
    {
      easing: Easing.out(Easing.exp),
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <Audio src={staticFile("audios/summer-time.mp3")} volume={audioVolume} />

      <Series>
        {/* 1. Logo: 0-60 frames */}
        <Series.Sequence durationInFrames={60}>
          <LogoOnly logo={logoUrl} />
        </Series.Sequence>

        {/* 2. "imagina": 60-120 frames */}
        <Series.Sequence durationInFrames={60}>
          <ImaginaScene />
        </Series.Sequence>

        {/* 3. WhatsApp (texto + componente): 120-570 frames */}
        <Series.Sequence durationInFrames={450}>
          <WhatsAppScene />
        </Series.Sequence>

        {/* 4. Calendar (texto + componente): 570-870 frames */}
        <Series.Sequence durationInFrames={300}>
          <CalendarScene />
        </Series.Sequence>

        {/* 5. Dashboard (texto + componente): 870-1170 frames */}
        <Series.Sequence durationInFrames={300}>
          <DashboardScene />
        </Series.Sequence>

        {/* 6. CTA "Pide tu demo hoy": 1170-1350 frames */}
        <Series.Sequence durationInFrames={180}>
          <CtaScene logo={logoUrl} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
