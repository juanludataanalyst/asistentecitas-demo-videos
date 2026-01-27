import "./styles.css";
import { Composition, registerRoot } from "remotion";
import { FullDemo } from "./compositions/FullDemo";
import { DashboardDemo } from "./compositions/DashboardDemo";
import { DashboardComplete } from "./compositions/DashboardComplete";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FullDemo"
        component={FullDemo}
        durationInFrames={1800}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          showDashboard: true,
          showCalendar: true,
          showBookingFlow: true
        }}
      />
      <Composition
        id="FullDemo-Short"
        component={FullDemo}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          showDashboard: true,
          showCalendar: true,
          showBookingFlow: true
        }}
      />
      <Composition
        id="Dashboard-5s"
        component={DashboardDemo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          startFrame: 0
        }}
      />
      <Composition
        id="DashboardComplete-5s"
        component={DashboardComplete}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          startFrame: 0
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
