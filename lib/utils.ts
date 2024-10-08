import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDayName = (
  timezone: number,
  datetime: number,
  format: "short" | "long",
) => {
  let utc_time = new Date(datetime * 1000);
  let local_time = new Date(utc_time.getTime() + timezone * 1000);

  const options: Intl.DateTimeFormatOptions = { weekday: format };
  const dateFormatter = new Intl.DateTimeFormat("UTC", options);

  return dateFormatter.format(local_time);
};

export const getLocalTime = (
  initialTime: Date,
  offsetSeconds: number,
): Date => {
  return new Date(initialTime.getTime() + offsetSeconds * 1000);
};

export const formatTemperature = (temp: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "degree",
    unitDisplay: "narrow",
  });
  const value = Math.round(temp);
  return formatter.format(value);
};

export const formatDistance = (value: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "kilometer",
    unitDisplay: "short",
    maximumFractionDigits: 0,
  });
  return formatter.format(value / 1000);
};

export const getDescription = {
  feelsLike: (feels_like: number, temp: number): string => {
    if (feels_like < temp) return "FEELS_COLDER";
    if (feels_like > temp) return "FEELS_WARMER";
    return "FEELS_SAME";
  },
  humidity: (humidity: number): string => {
    if (humidity < 40) return "HUMIDITY_LOW";
    if (humidity < 70) return "HUMIDITY_MODERATE";
    return "HUMIDITY_HIGH";
  },
  visibility: (visibility: number): string => {
    if (visibility >= 1000) return "VISIBILITY_CLEAR";
    if (visibility >= 500) return "VISIBILITY_GOOD";
    return "VISIBILITY_POOR";
  },
};
