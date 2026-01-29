import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

type WhatsAppCitaProps = {
  logo?: string;
};

export const WhatsAppCita = ({ logo }: WhatsAppCitaProps) => {
  void logo;
  const frame = useCurrentFrame();

  // Phone entrance animation
  const phoneScale = spring({
    frame,
    fps: 30,
    config: {
      damping: 100,
      stiffness: 200,
      mass: 1,
    },
  });

  // Slide up animation
  const slideUp = spring({
    frame,
    fps: 30,
    config: {
      damping: 80,
      stiffness: 180,
      mass: 1.5,
    },
  });

  const translateY = interpolate(slideUp, [0, 1], [150, 0], {
    extrapolateRight: "clamp",
  });

  // Message animations with stagger
  const headerDelay = 10;
  const message1Delay = 30;
  const message2Delay = 70;
  const message3Delay = 100;
  const message4Delay = 130;
  const message5Delay = 160;
  const message6Delay = 190;
  const inputDelay = 10;

  const headerOpacity = interpolate(frame, [headerDelay, headerDelay + 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const headerSlide = interpolate(frame, [headerDelay, headerDelay + 15], [-20, 0], {
    extrapolateRight: "clamp",
  });

  const message1Opacity = interpolate(frame, [message1Delay, message1Delay + 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const message1Slide = interpolate(frame, [message1Delay, message1Delay + 12], [-15, 0], {
    extrapolateRight: "clamp",
  });

  const message2Opacity = interpolate(frame, [message2Delay, message2Delay + 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const message2Slide = interpolate(frame, [message2Delay, message2Delay + 12], [15, 0], {
    extrapolateRight: "clamp",
  });

  const message3Opacity = interpolate(frame, [message3Delay, message3Delay + 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const message3Slide = interpolate(frame, [message3Delay, message3Delay + 12], [-15, 0], {
    extrapolateRight: "clamp",
  });

  const message4Opacity = interpolate(frame, [message4Delay, message4Delay + 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const message4Slide = interpolate(frame, [message4Delay, message4Delay + 12], [15, 0], {
    extrapolateRight: "clamp",
  });

  const message5Opacity = interpolate(frame, [message5Delay, message5Delay + 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const message5Slide = interpolate(frame, [message5Delay, message5Delay + 12], [-15, 0], {
    extrapolateRight: "clamp",
  });

  const message6Opacity = interpolate(frame, [message6Delay, message6Delay + 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const message6Slide = interpolate(frame, [message6Delay, message6Delay + 12], [15, 0], {
    extrapolateRight: "clamp",
  });

  const inputOpacity = interpolate(frame, [inputDelay, inputDelay + 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* Phone Frame */}
      <div
        style={{
          width: 380,
          height: 800,
          margin: "auto",
          backgroundColor: "#000000",
          borderRadius: 50,
          padding: 8,
          boxShadow: `
            0 0 0 2px #1a1a1a,
            0 0 0 3px #0d0d0d,
            0 40px 120px rgba(0, 0, 0, 0.9),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1)
          `,
          transform: `scale(${phoneScale}) translateY(${translateY}px)`,
          transformOrigin: "center",
          position: "relative",
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 28,
            backgroundColor: "#000000",
            borderRadius: 20,
            zIndex: 10,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Camera */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#1a1a2e",
              border: "2px solid #0d0d0d",
              boxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.8)",
            }}
          />
        </div>

        {/* Side Buttons */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 120,
            width: 3,
            height: 50,
            background: "linear-gradient(90deg, #0d0d0d 0%, #1a1a1a 100%)",
            borderRadius: "3px 0 0 3px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 200,
            width: 3,
            height: 80,
            background: "linear-gradient(90deg, #0d0d0d 0%, #1a1a1a 100%)",
            borderRadius: "3px 0 0 3px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -3,
            top: 140,
            width: 3,
            height: 60,
            background: "linear-gradient(270deg, #0d0d0d 0%, #1a1a1a 100%)",
            borderRadius: "0 3px 3px 0",
          }}
        />

        {/* Phone Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            borderRadius: 42,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Status Bar */}
          <div
            style={{
              height: 44,
              background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
              paddingTop: 12,
            }}
          >
            <span style={{
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: "600",
              letterSpacing: "-0.3",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            }}>
              9:41
            </span>
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="white">
                <path d="M1 4L6.5 9L16 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                <rect x="0.5" y="1" width="15" height="9" rx="2" stroke="white" strokeWidth="1"/>
                <rect x="2.5" y="3" width="11" height="5" rx="1" fill="white"/>
              </svg>
              <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
                <rect x="0.5" y="1.5" width="19" height="8" rx="3" stroke="white" strokeWidth="1"/>
                <rect x="2.5" y="3.5" width="15" height="4" rx="1" fill="white"/>
                <path d="M23 5.5L23 6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Chat Header */}
          <div
            style={{
              height: 56,
              backgroundColor: "#000000",
              display: "flex",
              alignItems: "center",
              padding: "0 4px 0 8px",
              opacity: headerOpacity,
              transform: `translateX(${headerSlide}px)`,
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Back Button */}
            <div style={{
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 4,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Avatar */}
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: "bold",
                color: "#FFFFFF",
                marginRight: 12,
                border: "2.5px solid #FFFFFF",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
                background: "linear-gradient(135deg, #56ff06 0%, #00d4aa 100%)",
              }}
            >
              AC
            </div>

            {/* Chat Info */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 17,
                fontWeight: "600",
                color: "#FFFFFF",
                letterSpacing: "-0.4",
                lineHeight: 1.2,
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}>
                <span>Asistentecitas</span>
              </div>
              <div style={{
                fontSize: 12,
                color: "#8696A0",
                marginTop: 2,
              }}>
                en línea
              </div>
            </div>

            {/* Header Icons */}
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                  <path d="M23 7L16 12L23 17V7Z" fill="white"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.721 20.9846 21.5574 21.2137 21.3521 21.4019C21.1467 21.5901 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.84C8.77382 17.2738 6.72633 15.1706 5.23 12.69C3.53999 10.0938 2.48856 7.13815 2.15 4.06C2.12499 3.78321 2.15792 3.50417 2.24665 3.24058C2.33538 2.97699 2.4782 2.73506 2.66563 2.52971C2.85306 2.32436 3.08139 2.16063 3.33583 2.04889C3.59027 1.93715 3.86538 1.87995 4.14 1.88H7.14C7.62574 1.87479 8.09353 2.06408 8.44826 2.40269C8.803 2.7413 9.01992 3.20599 9.06 3.69C9.13326 4.45292 9.29519 5.20365 9.54 5.92C9.64252 6.21938 9.66478 6.54041 9.60498 6.85153C9.54518 7.16265 9.40556 7.45259 9.2 7.69L8.09 8.82C9.46752 11.4245 11.5855 13.5425 14.19 14.92L15.32 13.81C15.5574 13.6044 15.8474 13.4648 16.1585 13.3452C16.4696 13.2252 16.7906 13.3675 17.09 13.47C17.8064 13.7148 18.5571 13.8767 19.32 13.95C19.8094 13.9909 20.2772 14.2115 20.6158 14.5711C20.9543 14.9307 21.1398 15.4025 21.13 15.89L22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="5" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="12" cy="19" r="2"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Chat Background */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#0B141A",
              backgroundImage: `
                linear-gradient(135deg, rgba(255,255,255,0.025) 1px, transparent 1px),
                linear-gradient(225deg, rgba(255,255,255,0.025) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              padding: "12px 12px 16px 12px",
              position: "relative",
              height: 595,
            }}
          >
            {/* Date Divider */}
            <div
              style={{
                textAlign: "center",
                marginBottom: 12,
                opacity: headerOpacity,
              }}
            >
              <span
                style={{
                  backgroundColor: "#182229",
                  padding: "5px 12px",
                  borderRadius: 7,
                  fontSize: 11,
                  color: "#FFFFFF",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                  fontWeight: "500",
                }}
              >
                Hoy
              </span>
            </div>

            {/* Message 1 - Incoming (Cliente) */}
            <div
              style={{
                display: "flex",
                marginBottom: 3,
                opacity: message1Opacity,
                transform: `translateX(${message1Slide}px)`,
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  backgroundColor: "#202C33",
                  borderRadius: 12,
                  borderTopLeftRadius: 4,
                  padding: "6px 10px 6px 10px",
                  boxShadow: "0 1px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div style={{
                  fontSize: 15,
                  color: "#E9EDEF",
                  lineHeight: 1.4,
                  marginBottom: 4,
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Buenas tardes! Quiero cortarme el pelo mañana a las 10
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3 }}>
                  <span style={{
                    fontSize: 11,
                    color: "#8696A0",
                  }}>9:30</span>
                </div>
              </div>
            </div>

            {/* Message 2 - Outgoing (Negocio) */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 3,
                opacity: message2Opacity,
                transform: `translateX(${message2Slide}px)`,
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  backgroundColor: "#005C4B",
                  borderRadius: 12,
                  borderTopRightRadius: 4,
                  padding: "6px 10px 6px 10px",
                  boxShadow: "0 1px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div style={{
                  fontSize: 15,
                  color: "#E9EDEF",
                  lineHeight: 1.4,
                  marginBottom: 4,
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Muy bien, le confirmo la cita para un corte de pelo a nombre de Juan mañana a las 10 con Cristina?
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3 }}>
                  <span style={{
                    fontSize: 11,
                    color: "#8696A0",
                  }}>9:31</span>
                  <svg width="17" height="11" viewBox="0 0 16 12" fill="none">
                    <path d="M1 4.5L6 9.5L15 1.5" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 4.5L10 9.5L19 1.5" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(-4, 0)"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message 3 - Incoming (Cliente) */}
            <div
              style={{
                display: "flex",
                marginBottom: 3,
                opacity: message3Opacity,
                transform: `translateX(${message3Slide}px)`,
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  backgroundColor: "#202C33",
                  borderRadius: 12,
                  borderTopLeftRadius: 4,
                  padding: "6px 10px 6px 10px",
                  boxShadow: "0 1px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div style={{
                  fontSize: 15,
                  color: "#E9EDEF",
                  lineHeight: 1.4,
                  marginBottom: 4,
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Si, perfecto
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3 }}>
                  <span style={{
                    fontSize: 11,
                    color: "#8696A0",
                  }}>9:32</span>
                </div>
              </div>
            </div>

            {/* Message 4 - Outgoing (Negocio) */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 3,
                opacity: message4Opacity,
                transform: `translateX(${message4Slide}px)`,
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  backgroundColor: "#005C4B",
                  borderRadius: 12,
                  borderTopRightRadius: 4,
                  padding: "6px 10px 6px 10px",
                  boxShadow: "0 1px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div style={{
                  fontSize: 15,
                  color: "#E9EDEF",
                  lineHeight: 1.4,
                  marginBottom: 4,
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Genial, cita confirmada para mañana
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3 }}>
                  <span style={{
                    fontSize: 11,
                    color: "#8696A0",
                  }}>9:32</span>
                  <svg width="17" height="11" viewBox="0 0 16 12" fill="none">
                    <path d="M1 4.5L6 9.5L15 1.5" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 4.5L10 9.5L19 1.5" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(-4, 0)"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message 5 - Incoming (Cliente) */}
            <div
              style={{
                display: "flex",
                marginBottom: 3,
                opacity: message5Opacity,
                transform: `translateX(${message5Slide}px)`,
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  backgroundColor: "#202C33",
                  borderRadius: 12,
                  borderTopLeftRadius: 4,
                  padding: "6px 10px 6px 10px",
                  boxShadow: "0 1px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div style={{
                  fontSize: 15,
                  color: "#E9EDEF",
                  lineHeight: 1.4,
                  marginBottom: 4,
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Muchas gracias
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3 }}>
                  <span style={{
                    fontSize: 11,
                    color: "#8696A0",
                  }}>9:33</span>
                </div>
              </div>
            </div>

            {/* Message 6 - Outgoing (Negocio) */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 3,
                opacity: message6Opacity,
                transform: `translateX(${message6Slide}px)`,
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  backgroundColor: "#005C4B",
                  borderRadius: 12,
                  borderTopRightRadius: 4,
                  padding: "6px 10px 6px 10px",
                  boxShadow: "0 1px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div style={{
                  fontSize: 15,
                  color: "#E9EDEF",
                  lineHeight: 1.4,
                  marginBottom: 4,
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  De nada, que tengas un buen día, le esperamos pronto
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3 }}>
                  <span style={{
                    fontSize: 11,
                    color: "#8696A0",
                  }}>9:33</span>
                  <svg width="17" height="11" viewBox="0 0 16 12" fill="none">
                    <path d="M1 4.5L6 9.5L15 1.5" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 4.5L10 9.5L19 1.5" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(-4, 0)"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <div
            style={{
              height: 56,
              backgroundColor: "#202C33",
              display: "flex",
              alignItems: "center",
              padding: "0 8px",
              gap: 6,
              opacity: inputOpacity,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div style={{
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#8696A0" strokeWidth="1.5" fill="none"/>
                <circle cx="9" cy="10" r="1.5" fill="#8696A0"/>
                <circle cx="15" cy="10" r="1.5" fill="#8696A0"/>
                <path d="M9 15C9 15 10.5 16 12 16C13.5 16 15 15 15 15" stroke="#8696A0" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div
              style={{
                flex: 1,
                height: 42,
                backgroundColor: "#2A3942",
                borderRadius: 21,
                padding: "0 14px",
                display: "flex",
                alignItems: "center",
                boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span style={{
                fontSize: 15,
                color: "#8696A0",
                fontWeight: "400",
              }}>Mensaje</span>
            </div>
            <div style={{
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                <path d="M12 5L12 19" stroke="#8696A0" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 12L19 12" stroke="#8696A0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="#00A884">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#00A884"/>
              </svg>
            </div>
          </div>

          {/* Home Indicator */}
          <div
            style={{
              height: 24,
              backgroundColor: "#202C33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 134,
                height: 5,
                backgroundColor: "#FFFFFF",
                borderRadius: 100,
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
