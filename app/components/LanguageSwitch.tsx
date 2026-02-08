"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function LanguageSwitch() {
  const router = useRouter();
  const sp = useSearchParams();
  const lang = sp.get("lang") || "kk";

  function setLang(next: string) {
    const params = new URLSearchParams(sp.toString());
    params.set("lang", next);
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-white/70">
      <span className="text-xs">Lang:</span>
      {["kk", "ru", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-md px-2 py-1 text-xs border border-white/10 hover:bg-white/10 ${
            lang === l ? "bg-white/10 text-white" : ""
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
