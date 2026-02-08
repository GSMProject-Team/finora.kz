"use client";

import Image from "next/image";
import { useLang } from "../providers";
import { LANGS } from "../i18n";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-3">
        <div className="relative h-10 w-10">
          <Image
            src="/logo.png"
            alt="Finora.kz logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="text-left">
          <div className="text-3xl font-semibold tracking-tight text-white">
            {t("brand")}
          </div>
        </div>
      </div>

      <div className="mt-2 text-center text-white/70">{t("tagline")}</div>

      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
        <span>{t("langLabel")}</span>
        {LANGS.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={[
              "rounded-md border px-3 py-1",
              l === lang ? "border-white/40 bg-white/10 text-white" : "border-white/15 hover:bg-white/5",
            ].join(" ")}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
