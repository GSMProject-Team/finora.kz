"use client";

import Image from "next/image";
import { LANGS } from "../i18n";
import { useLang } from "../providers";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-white/5 border border-white/10 p-2">
          <Image
            src="/logo.png"
            alt="Finora.kz logo"
            width={44}
            height={44}
            priority
          />
        </div>

        <div className="text-left">
          <div className="text-4xl font-semibold tracking-tight text-white">
            {t("brand")}
          </div>
        </div>
      </div>

      <div className="text-white/70 text-base">{t("tagline")}</div>

      <div className="mt-2 flex items-center gap-2 text-white/60 text-sm">
        <span>{t("lang")}</span>
        <div className="flex gap-2">
          {LANGS.map((x) => (
            <button
              key={x.key}
              onClick={() => setLang(x.key)}
              className={[
                "rounded-md px-3 py-1 border",
                lang === x.key ? "bg-white/15 border-white/30 text-white" : "bg-transparent border-white/10 hover:border-white/25",
              ].join(" ")}
              type="button"
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
