"use client";

import { createContext, useContext, useState } from "react";
import translations, { Lang, Translations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslations must be used inside LanguageProvider");
  return ctx;
}
