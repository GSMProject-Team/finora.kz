"use client";

import { useMemo, useState } from "react";
import Header from "./components/Header";

type Lang = "kk" | "ru" | "en";

const dict: Record<Lang, { tagline: string; cta: string; lang: string }> = {
  kk: { tagline: "Tech / Finance / Legal platform", cta: "Кеңес алуды бастау", lang: "Тіл" },
  ru: { tagline: "Платформа: Технологии / Финансы / Юриспруденция", cta: "Начать консультацию", lang: "Язык" },
  en: { tagline: "Tech / Finance / Legal platform", cta: "Start consultation", lang: "Lang" },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("kk");
  const t = useMemo(() => dict[lang], [lang]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-8 text-center">
        <Header />

        <p className="mt-2 text-white/70">{t.tagline}</p>

        <button
          className="mt-6 rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600"
          onClick={() => alert("Request sent (demo). Check console.")}
        >
          {t.cta}
        </button>

        <div className="mt-5 flex items-center justify-center gap-2 text-white/60 text-sm">
          <span>{t.lang}:</span>
          <LangBtn active={lang === "kk"} onClick={() => setLang("kk")}>KK</LangBtn>
          <LangBtn active={lang === "ru"} onClick={() => setLang("ru")}>RU</LangBtn>
          <LangBtn active={lang === "en"} onClick={() => setLang("en")}>EN</LangBtn>
        </div>
      </div>
    </main>
  );
}

function LangBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-md border px-2 py-1 " +
        (active ? "border-white/30 bg-white/10 text-white" : "border-white/10 bg-transparent hover:bg-white/5")
      }
      type="button"
    >
      {children}
    </button>
  );
}
