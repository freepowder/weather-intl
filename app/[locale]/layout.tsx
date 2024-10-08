import "weather-icons/css/weather-icons.min.css";
import "../globals.css";

import { GeistSans } from "geist/font/sans";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";

import { LocationDialog } from "@/components/location-dialog";
import { LocaleToggle } from "@/components/ui/locale-toggle";
import { ModeToggle } from "@/components/ui/mode-toggle";
import useTextDirection from "@/hooks/useTextDirection";
import { locales } from "@/i18n.config";
import {Suspense} from "react";
import {useTranslations} from "next-intl";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: "en-us" | "es-ES" };
}>) {
  unstable_setRequestLocale(locale);
  const dir = useTextDirection();
  const t = useTranslations("LocationDialog");
  return (
    <html
      lang={locale}
      dir={dir}
      className={GeistSans.variable}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 border-b z-50 bg-background/90 backdrop-blur">
            <div className="container max-w-screen-lg flex items-center h-14">
              <div className="flex gap-2 ml-auto">
                <ModeToggle />
                <Suspense>
                  <LocationDialog placeholder={t("text")} buttonText={t("placeholder")} suggestions={t("suggestions")}/>
                  <LocaleToggle locale={locale} />
                </Suspense>
              </div>
            </div>
          </header>
          <main className="py-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
