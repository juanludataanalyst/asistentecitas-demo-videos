import { AbsoluteFill } from "remotion";

interface FullDemoProps {
  showDashboard: boolean;
  showCalendar: boolean;
  showBookingFlow: boolean;
}

export const FullDemo: React.FC<FullDemoProps> = ({ showDashboard, showCalendar, showBookingFlow }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#fafaf9", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: 48, fontFamily: "Sora, sans-serif" }}>Asistentecitas Demo</h1>
    </AbsoluteFill>
  );
};
