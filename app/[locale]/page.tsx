import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { CurrentWeather } from "@/components/current-weather";
import { Dashboard } from "@/components/dashboard";
import { WeeklyForecast } from "@/components/weekly-forecast";
import { getForecast } from "@/lib/api";
import { DEFAULT_LOCATION } from "@/lib/constants";

export default async function Home({
  searchParams,
  params: { locale },
}: {
  searchParams: Record<string, string>;
  params: { locale: string };
}) {
  const data = await getForecast({
    lat: searchParams.lat || DEFAULT_LOCATION.lat,
    lon: searchParams.lon || DEFAULT_LOCATION.lon,
  });
  unstable_setRequestLocale(locale);
  if (!data) return notFound();

  const [today] = data.list;

  return (
      <div className="container max-w-screen-lg">
        <div className="flex-1">
          <CurrentWeather data={today} city={data.city} />
          <Dashboard data={today} />
          <WeeklyForecast data={data} />
        </div>
      </div>
  );
}
