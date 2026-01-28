import { AbsoluteFill } from "remotion";
import staticFile from "remotion";

const logoUrl = new URL('../assets/logo.svg', import.meta.url).href;

export const GeneralPromotionalImage = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#fafbfa",
        fontFamily: "Sora, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 100px",
        position: "relative",
      }}
    >
      {/* Logo Asistentecitas */}
      <img
        src={logoUrl}
        alt="Asistentecitas"
        style={{
          width: "200px",
          height: "auto",
          marginBottom: "30px",
        }}
      />

      {/* Título */}
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "700",
          color: "#111827",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
          margin: "0 0 20px 0",
          textAlign: "center",
        }}
      >
        Gestión Completa para Salones de Belleza
      </h1>

      <p
        style={{
          fontSize: "18px",
          fontWeight: "400",
          color: "#1f2937",
          lineHeight: "1.5",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 0 30px 0",
        }}
      >
        Todo lo que necesitas para administrar tu negocio: citas, clientes, inventario, métricas y más en una sola plataforma.
      </p>

      {/* Screenshot */}
      <div
        style={{
          position: "relative",
          width: "1600px",
          height: "750px",
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

        {/* Browser frame */}
        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 25px 80px rgba(0, 0, 0, 0.08), 0 0 0 1px #e5e7eb",
            overflow: "hidden",
            height: "100%",
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
                padding: "7px 16px",
                borderRadius: "6px",
                fontSize: "13px",
                color: "#d1d5db",
                fontWeight: "500",
                marginLeft: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              asistentecitas.com
            </div>
          </div>

          {/* Screenshot */}
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
              src={new URL('../../screenshots/general.png', import.meta.url).href}
              alt="Plataforma General de Asistentecitas"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "top center",
              }}
            />
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
        }}
      >
        asistentecitas.com
      </div>
    </AbsoluteFill>
  );
};
