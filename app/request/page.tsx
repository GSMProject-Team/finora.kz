"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Header from "../components/Header";
import { useLang } from "../providers";

type ServiceKey = "accounting" | "finance" | "legal";

export default function RequestPage() {
  const router = useRouter();
  const { t } = useLang();

  const services = useMemo(
    () =>
      [
        { key: "accounting" as const, label: t("svcAccounting") },
        { key: "finance" as const, label: t("svcFinance") },
        { key: "legal" as const, label: t("svcLegal") },
      ] as const,
    [t]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<Record<ServiceKey, boolean>>({
    accounting: true,
    finance: false,
    legal: false,
  });

  function toggleService(k: ServiceKey) {
    setSelected((p) => ({ ...p, [k]: !p[k] }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const picked = Object.entries(selected)
      .filter(([, v]) => v)
      .map(([k]) => k);

    console.log("REQUEST (demo)", { name, email, picked, message });
    alert("Request sent (demo). Check console.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-8 py-7">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="text-sm text-white/70 hover:text-white"
          >
            ← {t("back")}
          </button>
          <div className="opacity-0">spacer</div>
        </div>

        <div className="mt-4">
          <Header />
        </div>

        <h1 className="mt-6 text-2xl font-semibold text-white">
          {t("requestTitle")}
        </h1>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-white/70">{t("name")}</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/20"
              placeholder={t("name")}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">{t("email")}</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/20"
              placeholder="name@example.com"
              type="email"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">{t("services")}</label>

            <div className="grid gap-2 sm:grid-cols-3">
              {services.map((s) => (
                <label
                  key={s.key}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/80 hover:border-white/20"
                >
                  <input
                    type="checkbox"
                    checked={selected[s.key]}
                    onChange={() => toggleService(s.key)}
                  />
                  <span>{s.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">{t("message")}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/20"
              placeholder="..."
            />
          </div>

          <button
            className="w-full rounded-xl bg-blue-500 px-6 py-3 text-base font-semibold text-white hover:bg-blue-600"
            type="submit"
          >
            {t("send")}
          </button>

          <div className="text-xs text-white/40">{t("demoHint")}</div>
        </form>
      </div>
    </main>
  );
}
