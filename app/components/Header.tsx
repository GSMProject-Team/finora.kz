"use client";

import Image from "next/image";
import { LANGS } from "../i18n";
import { useLang } from "../providers";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10">
          <Image
            src="/logo.png"
            alt="Finora.kz logo"
            fill
            className="object-contain p-1"
            priority
          />
        </div>
        <div>
          <div className="text-xl font-semibold text-white">{t("brand")}</div>
          <div className="text-sm text-white/60">{t("tagline")}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-white/60">{t("langLabel")}</span>
        {LANGS.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`rounded-md px-3 py-1 text-sm ${
              lang === l
                ? "bg-white/15 text-white"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
