import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { DashboardDemo } from "./DashboardDemo";
import { CalendarDemo } from "./CalendarDemo";
import { TitlesOverlay } from "../components/TitlesOverlay";

interface FullDemoProps {
  showDashboard: boolean;
  showCalendar: boolean;
  showBookingFlow: boolean;
}

export const FullDemo: React.FC<FullDemoProps> = ({ showDashboard, showCalendar, showBookingFlow }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Define scene timings (in frames)
  const DASHBOARD_START = 0;
  const DASHBOARD_END = 30 * fps; // 30 seconds
  const CALENDAR_START = DASHBOARD_END;
  const CALENDAR_END = CALENDAR_START + (25 * fps); // 25 seconds
  const BOOKING_START = CALENDAR_END;
  const BOOKING_END = BOOKING_START + (20 * fps); // 20 seconds

  // Define scenes for titles
  const scenes = [
    { start: DASHBOARD_START, end: DASHBOARD_END, title: "Panel de Control", subtitle: "Métricas en tiempo real de tu salón" },
    { start: CALENDAR_START, end: CALENDAR_END, title: "Calendario Inteligente", subtitle: "Gestión de citas por colores y servicio" },
    { start: BOOKING_START, end: BOOKING_END, title: "Flujo de Reserva", subtitle: "Creación de citas en segundos" }
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#fafaf9" }}>
      {/* Dashboard Scene */}
      {showDashboard && frame >= DASHBOARD_START && frame < DASHBOARD_END && (
        <DashboardDemo startFrame={DASHBOARD_START} />
      )}

      {/* Calendar Scene */}
      {showCalendar && frame >= CALENDAR_START && frame < CALENDAR_END && (
        <CalendarDemo startFrame={CALENDAR_START} />
      )}

      {/* Titles and Subtitles Overlay */}
      <TitlesOverlay scenes={scenes} currentFrame={frame} />
    </AbsoluteFill>
  );
};
