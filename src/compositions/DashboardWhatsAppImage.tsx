import { AbsoluteFill } from "remotion";
import React from "react";

export const DashboardWhatsAppImage = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #f0ffe8 0%, #f5fff0 100%)",
        fontFamily: "Sora, sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "60px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Efectos decorativos de fondo */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          border: "8px solid rgba(86, 255, 6, 0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          border: "5px solid rgba(86, 255, 6, 0.4)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          border: "8px solid rgba(86, 255, 6, 0.45)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          border: "5px solid rgba(86, 255, 6, 0.35)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "100px",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(86, 255, 6, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "150px",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(86, 255, 6, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "40px",
        }}
      >
        {/* Título y descripción */}
        <div>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#111827",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              margin: "0 0 16px 0",
            }}
          >
            Asistente IA
          </h1>

          <p
            style={{
              fontSize: "22px",
              fontWeight: "500",
              color: "#1f2937",
              lineHeight: "1.4",
              maxWidth: "800px",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            La IA gestiona, tu solo visualizas como va tu negocio.
          </p>
        </div>

        {/* Logo Asistentecitas */}
        <img
          src={new URL('../assets/logo.svg', import.meta.url).href}
          alt="Asistentecitas"
          style={{
            width: "250px",
            height: "auto",
          }}
        />
      </div>

      {/* Screenshot */}
      <div
        style={{
          position: "relative",
          width: "1250px",
          height: "700px",
          alignSelf: "center",
          zIndex: 1,
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120%",
            height: "120%",
            background: "radial-gradient(circle, rgba(86, 255, 6, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Browser frame - Dashboard */}
        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 25px 80px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            height: "100%",
            zIndex: 5,
            border: "none",
          }}
        >
          {/* Browser header */}
          <div
            style={{
              background: "#f9fafb",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#28c940",
                }}
              />
            </div>
            <div
              style={{
                flex: 1,
                background: "white",
                padding: "7px 16px",
                borderRadius: "6px",
                fontSize: "13px",
                color: "#d1d5db",
                fontWeight: "500",
                marginLeft: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              asistentecitas.com/dashboard
            </div>
          </div>

          {/* Dashboard Screenshot */}
          <div
            style={{
              padding: "16px",
              background: "#f9fafb",
              height: "calc(100% - 46px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={new URL('../../screenshots/dashboard.PNG', import.meta.url).href}
              alt="Dashboard de Asistentecitas"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "top center",
              }}
            />
          </div>
        </div>

        {/* Phone frame - WhatsApp (right side of dashboard) */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "-30px",
            width: "220px",
            height: "460px",
            backgroundColor: "#000000",
            borderRadius: 32,
            padding: 6,
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
            zIndex: 10,
          }}
        >
          {/* Notch */}
          <div
            style={{
              position: "absolute",
              top: 5,
              left: "50%",
              transform: "translateX(-50%)",
              width: 60,
              height: 16,
              backgroundColor: "#000000",
              borderRadius: 10,
              zIndex: 10,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#1a1a2e",
              }}
            />
          </div>

          {/* Phone Screen */}
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#000000",
              borderRadius: 23,
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Status Bar - Very Compact */}
            <div
              style={{
                height: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 12px",
                paddingTop: 4,
              }}
            >
              <span style={{
                color: "#FFFFFF",
                fontSize: 9,
                fontWeight: "600",
              }}>
                10:35
              </span>
              <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
                <svg width="10" height="7" viewBox="0 0 17 11" fill="white">
                  <path d="M1 4L6.5 9L16 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <svg width="9" height="7" viewBox="0 0 16 11" fill="white">
                  <rect x="0.5" y="1" width="15" height="9" rx="2" stroke="white" strokeWidth="1"/>
                  <rect x="2.5" y="3" width="11" height="5" rx="1" fill="white"/>
                </svg>
              </div>
            </div>

            {/* Chat Header - Compact */}
            <div
              style={{
                height: 36,
                backgroundColor: "#000000",
                display: "flex",
                alignItems: "center",
                padding: "0 3px 0 5px",
              }}
            >
              <div style={{
                width: 22,
                height: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 3,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginRight: 6,
                  border: "1.5px solid #FFFFFF",
                  background: "linear-gradient(135deg, #56ff06 0%, #4cd905 100%)",
                }}
              >
                A
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 11,
                  fontWeight: "600",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}>
                  Asistentecitas
                </div>
                <div style={{
                  fontSize: 8,
                  color: "#8696A0",
                  lineHeight: 1,
                }}>
                  en línea
                </div>
              </div>

              <div style={{
                width: 26,
                height: 26,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="5" r="1.5"/>
                  <circle cx="12" cy="12" r="1.5"/>
                  <circle cx="12" cy="19" r="1.5"/>
                </svg>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#0B141A",
                padding: "8px 8px 8px 8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {/* Incoming Message */}
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    maxWidth: "85%",
                    backgroundColor: "#202C33",
                    borderRadius: 8,
                    borderTopLeftRadius: 2,
                    padding: "5px 7px",
                    boxShadow: "0 1px 0.5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div style={{
                    fontSize: 10,
                    color: "#E9EDEF",
                    lineHeight: 1.3,
                    marginBottom: 2,
                  }}>
                    Hola! Quisiera agendar una cita
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{
                      fontSize: 7,
                      color: "#8696A0",
                    }}>10:30</span>
                  </div>
                </div>
              </div>

              {/* Outgoing Message */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    maxWidth: "85%",
                    backgroundColor: "#005C4B",
                    borderRadius: 8,
                    borderTopRightRadius: 2,
                    padding: "5px 7px",
                    boxShadow: "0 1px 0.5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div style={{
                    fontSize: 10,
                    color: "#E9EDEF",
                    lineHeight: 1.3,
                    marginBottom: 2,
                  }}>
                    Perfecto! Cita confirmada a las 15:00
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: 1, alignItems: "center" }}>
                    <span style={{
                      fontSize: 7,
                      color: "#8696A0",
                    }}>10:31</span>
                    <svg width="10" height="7" viewBox="0 0 16 12" fill="none">
                      <path d="M1 4.5L6 9.5L15 1.5" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Third Message - Incoming */}
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    maxWidth: "85%",
                    backgroundColor: "#202C33",
                    borderRadius: 8,
                    borderTopLeftRadius: 2,
                    padding: "5px 7px",
                    boxShadow: "0 1px 0.5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div style={{
                    fontSize: 10,
                    color: "#E9EDEF",
                    lineHeight: 1.3,
                    marginBottom: 2,
                  }}>
                    Gracias
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{
                      fontSize: 7,
                      color: "#8696A0",
                    }}>10:32</span>
                  </div>
                </div>
              </div>

              {/* Fourth Message - Outgoing */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    maxWidth: "85%",
                    backgroundColor: "#005C4B",
                    borderRadius: 8,
                    borderTopRightRadius: 2,
                    padding: "5px 7px",
                    boxShadow: "0 1px 0.5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div style={{
                    fontSize: 10,
                    color: "#E9EDEF",
                    lineHeight: 1.3,
                    marginBottom: 2,
                  }}>
                    De nada, que tengas un buen dia, le esperamos pronto
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: 1, alignItems: "center" }}>
                    <span style={{
                      fontSize: 7,
                      color: "#8696A0",
                    }}>10:33</span>
                    <svg width="10" height="7" viewBox="0 0 16 12" fill="none">
                      <path d="M1 4.5L6 9.5L15 1.5" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Bar - Compact */}
            <div
              style={{
                height: 40,
                backgroundColor: "#202C33",
                display: "flex",
                alignItems: "center",
                padding: "0 5px",
                gap: 3,
              }}
            >
              <div style={{
                width: 26,
                height: 26,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#8696A0" strokeWidth="1.5" fill="none"/>
                  <circle cx="9" cy="10" r="1.5" fill="#8696A0"/>
                  <circle cx="15" cy="10" r="1.5" fill="#8696A0"/>
                  <path d="M9 15C9 15 10.5 16 12 16C13.5 16 15 15 15 15" stroke="#8696A0" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div
                style={{
                  flex: 1,
                  height: 26,
                  backgroundColor: "#2A3942",
                  borderRadius: 13,
                  padding: "0 8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{
                  fontSize: 10,
                  color: "#8696A0",
                }}>Mensaje</span>
              </div>
              <div style={{
                width: 26,
                height: 26,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#00A884">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#00A884"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marca de agua */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          fontSize: "12px",
          fontWeight: "600",
          color: "rgba(0, 0, 0, 0.3)",
          letterSpacing: "0.05em",
          zIndex: 2,
        }}
      >
        asistentecitas.com
      </div>
    </AbsoluteFill>
  );
};
