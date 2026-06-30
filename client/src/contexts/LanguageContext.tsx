import { createContext, useContext, useState } from "react";
export type TLanguage = "ru" | "en";
interface ILanguageContext {
  language: TLanguage;
  setLanguage: (value: TLanguage | ((prev: TLanguage) => TLanguage)) => void;
}

export const LanguageContext = createContext({} as ILanguageContext);

const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState(
    (localStorage.getItem("language") as TLanguage) || "en",
  );
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageContextProvider;

export function useLanguage() {
  return useContext(LanguageContext);
}
