import { DropletsIcon, EyeIcon, ThermometerIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { formatDistance, formatTemperature, getDescription } from "@/lib/utils";
import { List } from "@/types";

import { Widget } from "./ui/widget";

export const Dashboard = ({ data }: { data: List }) => {
  const { temp, feels_like, humidity } = data.main;
  const t = useTranslations("Dashboard");
  const widgets = [
    {
      title: t("feelTitle"),
      message: t(getDescription.feelsLike(feels_like, temp)),
      value: formatTemperature(feels_like),
      icon: <ThermometerIcon size={16} />,
    },
    {
      title: t("humidityTitle"),
      message: t(getDescription.humidity(humidity)),
      value: formatTemperature(humidity),
      icon: <DropletsIcon size={16} />,
    },
    {
      title: t("visibilityTitle"),
      message: t(getDescription.visibility(data.visibility)),
      value: formatDistance(data.visibility),
      icon: <EyeIcon size={16} />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      {widgets.map((widget) => (
        <Widget key={widget.title} {...widget} />
      ))}
    </div>
  );
};
