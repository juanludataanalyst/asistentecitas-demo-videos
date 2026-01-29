import { GreenPromotionalTemplate } from "./templates/GreenPromotionalTemplate";

export const SettingsPromotionalImage = () => {
  return (
    <GreenPromotionalTemplate
      title="Configuración Inteligente"
      description="Personaliza tu asistente IA. Ajusta respuestas, horarios y preferencias en segundos."
      screenshotUrl={new URL('../../screenshots/settings.PNG', import.meta.url).href}
      browserUrl="asistentecitas.com/configuracion"
      watermark="asistentecitas.com"
    />
  );
};
