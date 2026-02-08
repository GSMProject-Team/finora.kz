"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { I18N, Lang } from "./i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void; // <-- МІНЕ ОСЫ: => болуы керек
  t: (key: keyof (typeof I18N)["kk"]) => string;
};

const LangCtx = createContext<Ctx | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("kk");

  const value = useMemo<Ctx>(() => {
    return {
      lang,
      setLang,
      t: (key) => I18N[lang][key] ?? String(key),
    };
  }, [lang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside <Providers />");
  return ctx;
}
