import "./styles.css";
import { Composition, registerRoot } from "remotion";
import { DashboardComplete } from "./compositions/DashboardComplete";
import { IntroDashboard } from "./compositions/IntroDashboard";
import { CalendarComplete } from "./compositions/CalendarComplete";

export const RemotionRoot: React.FC = () => {
  return (
    <>
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
      <Composition
        id="IntroDashboard"
        component={IntroDashboard}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Calendar-5s"
        component={CalendarComplete}
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
