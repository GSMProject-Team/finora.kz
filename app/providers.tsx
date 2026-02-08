"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Lang } from "./i18n";
import { I18N } from "./i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof (typeof I18N)["kk"]) => any;
};

const LangContext = createContext<Ctx | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("kk");

  const setLang = (l: Lang) => setLangState(l);

  const value = useMemo<Ctx>(() => {
    const dict = I18N[lang];
    return {
      lang,
      setLang,
      t: (key) => dict[key],
    };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within Providers");
  return ctx;
}
