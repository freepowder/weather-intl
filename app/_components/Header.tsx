import { Link, Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale() as Locale;

  return (


    <div className="bg-black text-white w-full">
      <div className="flex flex-col mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LocaleSwitcher locale={locale} />
          </div>
          <nav className="md:flex space-x-4">
            <a href="/" className="hover:text-gray-300"> {t("appTitle")}</a>
            <a href="/week" className="hover:text-gray-300">{t("navLinks.week")}</a>
            <a href="/about" className="hover:text-gray-300">{t("navLinks.about")}</a>
          </nav>
        </div>
      </div>
    </div>
  )
    ;
}
