"use client";

import { LANGS, type Lang } from "../lib/i18n";
import { useLang } from "../providers";

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-white/60">{t("langLabel")}</span>
      <div className="flex gap-2">
        {LANGS.map((l) => {
          const active = l === lang;
          return (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l as Lang)}
              className={[
                "h-9 rounded-lg px-3 text-sm transition",
                "border border-white/10 bg-white/5 hover:bg-white/10",
                active ? "ring-2 ring-white/25" : "",
              ].join(" ")}
            >
              {l.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
