import { AbsoluteFill } from "remotion";
import staticFile from "remotion";

export const DashboardPromotionalImage = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #fafbfa 100%)",
        fontFamily: "Sora, sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "80px 100px",
      }}
    >
      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.3,
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
          marginBottom: "60px",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                background: "#56ff06",
                borderRadius: "50%",
              }}
            />
            <span>ANALYTICS DASHBOARD</span>
          </div>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#d1d5db",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              margin: "0 0 8px 0",
            }}
          >
            Métricas en
          </h1>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#111827",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              margin: "0",
            }}
          >
            tiempo real
          </h1>

          <p
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "#1f2937",
              lineHeight: "1.6",
              maxWidth: "550px",
              marginTop: "20px",
            }}
          >
            Toma decisiones informadas con datos actualizados al instante. Visualiza el rendimiento de tu salón desde cualquier lugar.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#1f2937",
          }}
        >
          <span style={{ color: "#fbbf24", letterSpacing: "2px" }}>
            ★★★★★
          </span>
          <span>+500 salones confían</span>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "60px",
          alignItems: "center",
          flex: 1,
        }}
      >
        {/* Features List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Feature 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              padding: "28px",
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg, #56ff06 0%, #4cd905 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(86, 255, 6, 0.3)",
              }}
            >
              📊
            </div>
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#111827",
                  margin: "0 0 6px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                Dashboard completo
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#1f2937",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                Visualiza ingresos, citas y rendimiento en un solo lugar con gráficos interactivos.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              padding: "28px",
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg, #56ff06 0%, #4cd905 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(86, 255, 6, 0.3)",
              }}
            >
              ⚡
            </div>
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#111827",
                  margin: "0 0 6px 0",
                }}
              >
                Actualización en vivo
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#1f2937",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                Datos sincronizados en tiempo real para siempre tener la información más reciente.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              padding: "28px",
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg, #56ff06 0%, #4cd905 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(86, 255, 6, 0.3)",
              }}
            >
              📈
            </div>
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#111827",
                  margin: "0 0 6px 0",
                }}
              >
                Reportes detallados
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#1f2937",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                Exporta reportes personalizados y analiza tendencias con filtros avanzados.
              </p>
            </div>
          </div>
        </div>

        {/* Screenshot */}
        <div
          style={{
            position: "relative",
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
              background: "radial-gradient(circle, rgba(86, 255, 6, 0.15) 0%, transparent 70%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Badge */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              background: "#111827",
              color: "white",
              padding: "16px 28px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "700",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
              zIndex: 3,
            }}
          >
            NEW
          </div>

          {/* Browser frame */}
          <div
            style={{
              position: "relative",
              background: "white",
              borderRadius: "20px",
              boxShadow: "0 25px 80px rgba(0, 0, 0, 0.08), 0 0 0 1px #e5e7eb",
              overflow: "hidden",
              zIndex: 2,
            }}
          >
            {/* Browser header */}
            <div
              style={{
                background: "#f9fafb",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderBottom: "1px solid #e5e7eb",
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
                  padding: "8px 16px",
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

            {/* Screenshot content */}
            <div
              style={{
                padding: "16px",
                background: "#f9fafb",
              }}
            >
              <img
                src="../../screenshots/dashboard.PNG"
                alt="Dashboard de Asistentecitas"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "20px",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px 40px",
              background: "#111827",
              color: "white",
              fontSize: "17px",
              fontWeight: "700",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(17, 24, 39, 0.15)",
              textDecoration: "none",
            }}
          >
            Comenzar gratis →
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#1f2937",
            }}
          >
            Ver demo →
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#1f2937",
          }}
        >
          <span style={{ color: "#fbbf24", letterSpacing: "2px" }}>
            ★★★★★
          </span>
          <span>4.9/5 en Capterra</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
