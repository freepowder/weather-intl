"use client";

import { useSearchParams } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  type Locale,
  localeNames,
  locales,
  usePathname,
  useRouter,
} from "@/i18n.config";
export function LocaleToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const changeLocale = (loc: string) => {
    const newLocale = loc as Locale;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    let url = pathname;
    if (lat && lon) {
      url = pathname + "?lat=" + lat + "&lon=" + lon;
    }
    router.replace(url, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default">
          {localeNames[locale]}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => (
          <DropdownMenuItem key={loc} onClick={() => changeLocale(loc)}>
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
