import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

type WhatsAppCitaPromoProps = {
  showPromoMessage?: boolean;
  scale?: number;
  opacity?: number;
  startFrame?: number;
};

export const WhatsAppCitaPromo: React.FC<WhatsAppCitaPromoProps> = ({
  showPromoMessage = false,
  scale = 1,
  opacity = 1,
  startFrame = 0
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);

  // Phone entrance animation - más rápido
  const phoneScale = spring({
    frame,
    fps: 30,
    config: {
      damping: 60,
      stiffness: 220,
      mass: 0.6,
    },
  });

  // Aplicar scale y opacity externos
  const finalScale = phoneScale * scale;

  // Slide up animation - mejorado (usa frame original para mantener velocidad)
  const slideUp = spring({
    frame,
    fps: 30,
    config: {
      damping: 70,
      stiffness: 160,
      mass: 1.2,
    },
  });

  const translateY = interpolate(slideUp, [0, 1], [120, 0], {
    extrapolateRight: "clamp",
  });

  // Message animations con mejor timing
  const headerDelay = 15;
  const message1Delay = 40;
  const message2Delay = 80;
  const message3Delay = 120;
  const message4Delay = 160;
  const message5Delay = 200;
  const message6Delay = 240;
  const inputDelay = 10;

  // Función helper para animaciones profesionales
  const messageAnim = (delay: number) => {
    const springValue = spring({
      frame: localFrame - delay,
      fps: 30,
      config: {
        damping: 90,
        stiffness: 200,
        mass: 0.6,
      },
    });

    return {
      opacity: interpolate(springValue, [0, 1], [0, 1], { extrapolateRight: "clamp" }),
      translateY: interpolate(springValue, [0, 1], [20, 0], { extrapolateRight: "clamp" }),
      scale: interpolate(springValue, [0, 1], [0.95, 1], { extrapolateRight: "clamp" }),
    };
  };

  const headerAnim = messageAnim(headerDelay);
  const message1 = messageAnim(message1Delay);
  const message2 = messageAnim(message2Delay);
  const message3 = messageAnim(message3Delay);
  const message4 = messageAnim(message4Delay);
  const message5 = messageAnim(message5Delay);
  const message6 = messageAnim(message6Delay);

  const inputOpacity = interpolate(localFrame, [inputDelay, inputDelay + 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
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
          transform: `scale(${finalScale}) translateY(${translateY}px)`,
          transformOrigin: "center",
          position: "relative",
          opacity,
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
              opacity: headerAnim.opacity,
              transform: `translateY(${headerAnim.translateY}px) scale(${headerAnim.scale})`,
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
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
            <div
              style={{
                textAlign: "center",
                marginBottom: 12,
                opacity: headerAnim.opacity,
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
                  fontWeight: "400",
                }}
              >
                Hoy
              </span>
            </div>

            {/* Message 1 */}
            <div
              style={{
                display: "flex",
                marginBottom: 3,
                opacity: message1.opacity,
                transform: `translateY(${message1.translateY}px) scale(${message1.scale})`,
                transformOrigin: "left center",
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
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Buenas tardes! Quiero cortarme el pelo mañana a las 10
                </div>
              </div>
            </div>

            {/* Message 2 */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 3,
                opacity: message2.opacity,
                transform: `translateY(${message2.translateY}px) scale(${message2.scale})`,
                transformOrigin: "right center",
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
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Muy bien, le confirmo la cita para un corte de pelo a nombre de Juan mañana a las 10 con Cristina?
                </div>
              </div>
            </div>

            {/* Message 3 */}
            <div
              style={{
                display: "flex",
                marginBottom: 3,
                opacity: message3.opacity,
                transform: `translateY(${message3.translateY}px) scale(${message3.scale})`,
                transformOrigin: "left center",
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
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Si, perfecto
                </div>
              </div>
            </div>

            {/* Message 4 */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 3,
                opacity: message4.opacity,
                transform: `translateY(${message4.translateY}px) scale(${message4.scale})`,
                transformOrigin: "right center",
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
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Genial, cita confirmada para mañana
                </div>
              </div>
            </div>

            {/* Message 5 */}
            <div
              style={{
                display: "flex",
                marginBottom: 3,
                opacity: message5.opacity,
                transform: `translateY(${message5.translateY}px) scale(${message5.scale})`,
                transformOrigin: "left center",
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
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  Muchas gracias
                </div>
              </div>
            </div>

            {/* Message 6 */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 3,
                opacity: message6.opacity,
                transform: `translateY(${message6.translateY}px) scale(${message6.scale})`,
                transformOrigin: "right center",
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
                  fontWeight: "400",
                  wordBreak: "break-word",
                }}>
                  De nada, que tengas un buen día, le esperamos pronto
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
