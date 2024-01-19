import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import TEMPLATE_EN from "./en/template.json";
import TEMPLATE_FR from "./fr/template.json";

const resources = {
  en: {
    template: TEMPLATE_EN,
  },
  fr: {
    template: TEMPLATE_FR,
  },
};

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
