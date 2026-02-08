"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "./i18n";
import { I18N } from "./i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) -> void;
  t: (key: keyof typeof I18N["kk"]) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("kk");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "kk";
    setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const value = useMemo<Ctx>(() => {
    return {
      lang,
      setLang,
      t: (key) => I18N[lang][key],
    };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <Providers>");
  return ctx;
}
