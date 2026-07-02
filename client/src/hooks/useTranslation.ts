import translationJson from "../../public/translation.json";
import { useLanguage } from "../contexts/LanguageContext";
export const useTranslation = () => {
  const { language: lang, setLanguage: setLang } = useLanguage();
  const t = translationJson;

  return { t, lang, setLang };
};
