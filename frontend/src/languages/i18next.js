import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import vietnamese from "./Vi/vietnamese.json";
import ennglish from "./Eng/english.json";
import korean from "./Ko/korean.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        common: vietnamese,
      },
      en: {
        common: ennglish,
      },
      ko: {
        common: korean,
      },
    },
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
