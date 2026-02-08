"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";

type Lang = "kk" | "ru" | "en";

const dict = {
  kk: {
    tagline: "Tech / Finance / Legal platform",
    cta: "Кеңес алуды бастау",
    lang: "Тіл:",
  },
  ru: {
    tagline: "Платформа: Tech / Finance / Legal",
    cta: "Начать консультацию",
    lang: "Язык:",
  },
  en: {
    tagline: "Tech / Finance / Legal platform",
    cta: "Start consultation",
    lang: "Lang:",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("kk");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "kk" || saved === "ru" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => dict[lang], [lang]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-[420px] max-w-[92vw] rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-8 text-center">
        <Header lang={lang} />

        <p className="mt-2 text-white/70">{t.tagline}</p>

        <button className="mt-6 w-full rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600">
          {t.cta}
        </button>

        <div className="mt-6 flex items-center justify-center gap-3 text-white/70 text-sm">
          <span>{t.lang}</span>
          <div className="flex gap-2">
            {(["kk", "ru", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={
                  "rounded-md border px-3 py-1 " +
                  (lang === l
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 bg-transparent hover:bg-white/5")
                }
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
