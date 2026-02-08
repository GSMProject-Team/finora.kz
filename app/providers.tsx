"use client";

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { I18N, Lang } from "./i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof I18N["kk"]) => string;
};

const LangCtx = createContext<Ctx | null>(null);

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
    const dict = I18N[lang];
    return {
      lang,
      setLang,
      t: (key) => dict[key] ?? String(key),
    };
  }, [lang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside <Providers />");
  return ctx;
}
