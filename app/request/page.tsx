"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LANGS } from "../i18n";
import { useLang } from "../providers";

export default function RequestPage() {
  const router = useRouter();
  const { lang, setLang, t } = useLang();

  const serviceOptions = useMemo(
    () => [
      { id: "accounting", label: t("serviceAccounting") },
      { id: "finance", label: t("serviceFinance") },
      { id: "legal", label: t("serviceLegal") },
    ],
    [t]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<string[]>(["accounting"]);
  const [message, setMessage] = useState("");

  const toggleService = (id: string) => {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, services, message, lang });
    alert("Request sent (demo). Check console.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-[860px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-10 py-10">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-white/70 hover:text-white inline-flex items-center gap-2"
          >
            ← {t("back")}
          </button>

          <div className="flex items-center gap-2">
            {LANGS.map((x) => (
              <button
                key={x.key}
                onClick={() => setLang(x.key)}
                className={[
                  "rounded-md px-3 py-1 border text-sm",
                  lang === x.key ? "bg-white/15 border-white/30 text-white" : "bg-transparent border-white/10 hover:border-white/25 text-white/80",
                ].join(" ")}
                type="button"
              >
                {x.label}
              </button>
            ))}
          </div>
        </div>

        <h1 className="mt-6 text-3xl font-semibold text-white">{t("requestTitle")}</h1>

        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-white/70 text-sm mb-2">{t("name")}</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-white/25"
              placeholder={t("name")}
            />
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-2">{t("email")}</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-white/25"
              placeholder="name@example.com"
              type="email"
            />
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-3">{t("services")}</label>

            <div className="grid gap-3 sm:grid-cols-3">
              {serviceOptions.map((s) => {
                const active = services.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleService(s.id)}
                    className={[
                      "rounded-xl border px-4 py-3 text-left",
                      active
                        ? "border-blue-400/50 bg-blue-500/10 text-white"
                        : "border-white/10 bg-black/10 text-white/80 hover:border-white/25",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium">{s.label}</span>
                      <span className={active ? "text-blue-300" : "text-white/30"}>
                        {active ? "✓" : "○"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-2 text-white/45 text-xs">
              {t("demoNote")}
            </div>
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-2">{t("message")}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[120px] rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-white/25"
              placeholder={t("message")}
            />
          </div>

          <button
            className="w-full rounded-xl bg-blue-500 px-6 py-3 text-base font-medium text-white hover:bg-blue-600"
            type="submit"
          >
            {t("send")}
          </button>
        </form>
      </div>
    </main>
  );
}
