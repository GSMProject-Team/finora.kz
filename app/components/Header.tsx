"use client";

import Image from "next/image";
import { LANGS } from "../i18n";
import { useLang } from "../providers";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-white/10">
          <Image src="/logo.png" alt="Finora.kz logo" fill className="object-contain p-1" />
        </div>
        <div className="text-3xl font-semibold tracking-tight text-white">
          {t("brand")}
        </div>
      </div>

      <div className="text-center text-white/70">{t("tagline")}</div>

      <div className="mt-1 flex items-center gap-2 text-sm text-white/60">
        <span>{t("lang")}:</span>
        <div className="flex gap-2">
          {LANGS.map((l) => {
            const active = l === lang;
            return (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={
                  "rounded-md border px-3 py-1 transition " +
                  (active
                    ? "border-white/30 bg-white/15 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10")
                }
              >
                {l.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
