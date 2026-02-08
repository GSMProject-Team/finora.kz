"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLang } from "../providers";

type ServiceKey = "accounting" | "finance" | "legal";

export default function RequestPage() {
  const { t } = useLang();

  const services = useMemo(
    () =>
      [
        { key: "accounting" as const, label: t("svc_accounting") },
        { key: "finance" as const, label: t("svc_finance") },
        { key: "legal" as const, label: t("svc_legal") },
      ] satisfies { key: ServiceKey; label: string }[],
    [t]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<ServiceKey[]>(["accounting"]);
  const [msg, setMsg] = useState("");

  const toggle = (k: ServiceKey) => {
    setSelected((prev) =>
      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      services: selected,
      msg,
    });
    alert(t("sent"));
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="text-white/70 hover:text-white">
            ← {t("back")}
          </Link>
        </div>

        <h1 className="text-3xl font-semibold text-white">{t("leaveRequest")}</h1>

        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm text-white/70 mb-2">{t("name")}</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("name")}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">{t("email")}</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">{t("services")}</label>
            <div className="grid gap-3 sm:grid-cols-3">
              {services.map((s) => {
                const active = selected.includes(s.key);
                return (
                  <button
                    type="button"
                    key={s.key}
                    onClick={() => toggle(s.key)}
                    className={
                      "rounded-lg border px-4 py-3 text-left transition " +
                      (active
                        ? "border-white/30 bg-white/15 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10")
                    }
                  >
                    <div className="flex items-center justify-between">
                      <span>{s.label}</span>
                      <span className={"text-sm " + (active ? "text-white" : "text-white/40")}>
                        {active ? "✓" : ""}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">{t("msg")}</label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
          >
            {t("send")}
          </button>

          <div className="text-xs text-white/40">{t("demo")}</div>
        </form>
      </div>
    </main>
  );
}
