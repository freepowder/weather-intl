import { Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import ClientWeatherAlerts from "./ClientWeatherAlerts";

const mockWeatherAlerts = {
  "en-us": [
    "🌩️ Severe Thunderstorm Warning until 09:00 PM",
    "🌨️ Blizzard Warning in effect from 01:00 AM",
    "🌊 Coastal Flood Advisory from noon today to 10:00 PM",
  ],
  "es-ES": [
    "🌩️ Aviso de tormenta severa hasta 09:00 PM",
    "🌨️ Advertencia de tormenta de nieve vigente desde 01:00 AM",
    "🌊 Aviso de inundaciones costeras desde el mediodía de hoy hasta 10:00 PM",
  ],
};

export default function WeatherAlerts() {
  const t = useTranslations("WeatherAlerts");

  const locale = useLocale() as Locale;
  const alerts = mockWeatherAlerts[locale];

  return (
    <ClientWeatherAlerts title={t("title")}>
      {alerts.map((alert) => (
        <p className="py-2" key={alert}>
          {alert}
        </p>
      ))}
    </ClientWeatherAlerts>
  );
}
