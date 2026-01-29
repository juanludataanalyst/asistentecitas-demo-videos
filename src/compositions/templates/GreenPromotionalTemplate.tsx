import { AbsoluteFill } from "remotion";
import React from "react";

const logoUrl = new URL('../../assets/logo.svg', import.meta.url).href;

interface GreenPromotionalTemplateProps {
  title: string;
  description: string;
  screenshotUrl: string;
  browserUrl?: string;
  watermark?: string;
}

export const GreenPromotionalTemplate: React.FC<GreenPromotionalTemplateProps> = ({
  title,
  description,
  screenshotUrl,
  browserUrl = "asistentecitas.com",
  watermark = "asistentecitas.com",
}) => {
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
      {/* Efectos decorativos de fondo - Círculos verde lima */}
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
            {title}
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
            {description}
          </p>
        </div>

        {/* Logo Asistentecitas */}
        <img
          src={logoUrl}
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
              {browserUrl}
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
              src={screenshotUrl}
              alt="Screenshot"
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
          zIndex: 2,
        }}
      >
        {watermark}
      </div>
    </AbsoluteFill>
  );
};
