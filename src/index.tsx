import "./styles.css";
import { Composition, registerRoot } from "remotion";
import { DashboardComplete } from "./compositions/DashboardComplete";
import { IntroDashboard } from "./compositions/IntroDashboard";
import { CalendarComplete } from "./compositions/CalendarComplete";
import { WhatsAppChat } from "./compositions/WhatsAppChat";
import { WhatsAppCita } from "./compositions/WhatsAppCita";
import { Cliente2Video } from "./compositions/Cliente2Video";
import { TestVideoTemplate } from "./compositions/TestVideoTemplate";
import { PromotionalVideo } from "./compositions/PromotionalVideo";
import { TestimonialVideo } from "./compositions/TestimonialVideo";
import { AudioTest } from "./compositions/AudioTest";
import { SaaSPromotionalImage } from "./compositions/SaaSPromotionalImage";
import { CalendarScreenshotImage } from "./compositions/CalendarScreenshotImage";
import { CalendarWhatsAppImage } from "./compositions/CalendarWhatsAppImage";
import { DashboardWhatsAppImage } from "./compositions/DashboardWhatsAppImage";
import { SettingsPromotionalImage } from "./compositions/SettingsPromotionalImage";
import { LogoIntroVideo } from "./compositions/LogoIntroVideo";
import { CtaVideo } from "./compositions/CtaVideo";

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
      <Composition
        id="WhatsAppChat"
        component={WhatsAppChat}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="WhatsAppCita"
        component={WhatsAppCita}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Cliente2Video"
        component={Cliente2Video}
        durationInFrames={480}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          logo: "https://asistentecitas.com/logo.png",
          video1: "",
          video2: "",
          video3: "",
          soundText: "",
          soundLogo: ""
        }}
      />
      <Composition
        id="TestVideoTemplate"
        component={TestVideoTemplate}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PromotionalVideo"
        component={PromotionalVideo}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TestimonialVideo"
        component={TestimonialVideo}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="AudioTest"
        component={AudioTest}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SaaSPromotionalImage"
        component={SaaSPromotionalImage}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CalendarScreenshotImage"
        component={CalendarScreenshotImage}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CalendarWhatsAppImage"
        component={CalendarWhatsAppImage}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DashboardWhatsAppImage"
        component={DashboardWhatsAppImage}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SettingsPromotionalImage"
        component={SettingsPromotionalImage}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LogoIntroVideo"
        component={LogoIntroVideo}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CtaVideo"
        component={CtaVideo}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

registerRoot(RemotionRoot);
