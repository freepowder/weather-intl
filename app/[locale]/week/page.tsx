import type { WeeklyWeatherRoot } from "@/types";
import { promises as fs } from "fs";
import {
  getFormatter,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Week.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Week({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  const fileContents = await fs.readFile(
    `${process.cwd()}/app/_data/week.json`,
    "utf-8",
  );
  const { weeklyWeather } = JSON.parse(
    fileContents,
  ) as WeeklyWeatherRoot;

  const t = await getTranslations("Week");
  const format = await getFormatter();
  const temperatureUnit =
    locale === "en-us" ? "fahrenheit" : "celsius";

  return (
    <main>
      <div className="flex items-baseline justify-between">
        <h1 className="text-xs font-bold">{t("title")}</h1>
        <p className="w-max rounded-md bg-red-900 px-2 py-1 text-xs text-red-100">
          {t("alertCount", { count: 3 })}
        </p>
      </div>
      <div className="divide-y divide divide-gray-900 sm:text-xs">
        {weeklyWeather.map((day) => (
          <section key={day.dateTime} className="py-5">
            <h2 className="mb-1 text-sm font-bold">
              {t("dayDate", {
                dayDate: new Date(day.dateTime),
              })}
            </h2>
            <div>
              <div className="flex items-baseline justify-items-center gap-3">
                <p className="relative top-1 text-lg sm:text-4xl">
                  {day.conditionIcon}
                </p>
                <p className=" text-xs sm:text-3xl font-light">
                  {t(day.condition)}
                </p>
                <p className=" text-xs sm:text-3xl font-thin">
                  {format.number(
                    day.temperature[temperatureUnit],
                    "temperature",
                  )}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
