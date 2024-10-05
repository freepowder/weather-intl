import Header from "@/app/_components/Header";
import "@/app/globals.css";
import { locales } from "@/i18n.config";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import useTextDirection from "../_hooks/useTextDirection";

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

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const dir = useTextDirection();

  return (
    <html lang={locale} dir={dir} className={'w-screen bg-gray-900'}>
      <body className={'w-full'}>
        <Header />
        <div className="mx-auto md:w-[600px]  bg-slate-600 p-10 rounded-2xl pt-3 text-sky-100 my-10">{children}</div>

      </body>
    </html>
  );
}
