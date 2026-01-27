import { Composition } from "remotion";
import { FullDemo } from "./compositions/FullDemo";

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
    </>
  );
};
