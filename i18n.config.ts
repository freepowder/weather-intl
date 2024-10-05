import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "es-ES"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "en-us": "English",
  "es-ES": "Spanish",
};

export const { Link, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
