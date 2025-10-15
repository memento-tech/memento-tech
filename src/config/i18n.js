import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detection: {
      order: ["cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;

export const ALL_LANGUAGES = [
  {
    languageCode: "en",
    titleCode: "language.en.title.code",
  },
  {
    languageCode: "rs",
    titleCode: "language.rs.title.code",
  },
  {
    languageCode: "de",
    titleCode: "language.de.title.code",
  },
  {
    languageCode: "ru",
    titleCode: "language.ru.title.code",
  },
];
