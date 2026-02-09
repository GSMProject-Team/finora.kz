"use client";

import { Providers, useLang } from "../providers";
import Link from "next/link";

function RequestInner() {
  const { t } = useLang();

  const services = [
    { key: "acc", label: t("serviceAccounting") },
    { key: "fin", label: t("serviceFinance") },
    { key: "law", label: t("serviceLegal") },
  ] as const;

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="card w-full max-w-[860px]">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-white/70 hover:text-white">
            {t("back")}
          </Link>

          {/* Тілді request бетінде де ауыстырғың келсе — LanguageSwitch қой */}
          <div className="text-white/50 text-sm">{/* top right empty */}</div>
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl font-semibold text-white">
          {t("requestTitle")}
        </h1>

        <form
          className="mt-6 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const picked = services
              .filter((s) => fd.get(`service_${s.key}`) === "on")
              .map((s) => s.label);

            console.log({
              name: fd.get("name"),
              email: fd.get("email"),
              services: picked,
              message: fd.get("message"),
            });

            alert("Request sent (demo). Check console.");
            e.currentTarget.reset();
          }}
        >
          <label className="field">
            <span className="label">{t("name")}</span>
            <input className="input" name="name" placeholder={t("name")} />
          </label>

          <label className="field">
            <span className="label">{t("email")}</span>
            <input className="input" name="email" placeholder="name@example.com" />
          </label>

          <div className="field">
            <span className="label">{t("services")}</span>

            <div className="grid gap-2 rounded-xl border border-white/10 bg-white/5 p-4">
              {services.map((s) => (
                <label key={s.key} className="flex items-center gap-3 text-white/90">
                  <input type="checkbox" name={`service_${s.key}`} className="h-4 w-4" />
                  <span>{s.label}</span>
                </label>
              ))}
              <div className="text-xs text-white/50">
                Бірнешеуін қатар таңдауға болады.
              </div>
            </div>
          </div>

          <label className="field">
            <span className="label">{t("message")}</span>
            <textarea className="textarea" name="message" rows={5} />
          </label>

          <button className="btnPrimary" type="submit">
            {t("send")}
          </button>

          <div className="text-xs text-white/50">{t("demoHint")}</div>
        </form>
      </div>
    </main>
  );
}

export default function RequestPage() {
  return (
    <Providers>
      <RequestInner />
    </Providers>
  );
}
