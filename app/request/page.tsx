"use client";

import { useRouter } from "next/navigation";
import { useLang } from "../providers";

type ServiceKey = "acc" | "fin" | "law";

export default function RequestPage() {
  const router = useRouter();
  const { t } = useLang();

  const services = [
    { key: "acc" as const, label: t("services").acc },
    { key: "fin" as const, label: t("services").fin },
    { key: "law" as const, label: t("services").law },
  ];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      services: fd.getAll("services").map(String),
      message: String(fd.get("message") || ""),
    };

    console.log("REQUEST (demo):", payload);
    alert(t("sent"));
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-10">
        <button
          onClick={() => router.back()}
          className="text-sm text-white/70 hover:text-white"
        >
          ← {t("back")}
        </button>

        <h1 className="mt-4 text-3xl font-semibold text-white">{t("requestTitle")}</h1>

        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm text-white/70">{t("name")}</label>
            <input
              name="name"
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/25"
              placeholder={t("name")}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-white/70">{t("email")}</label>
            <input
              name="email"
              type="email"
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/25"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <div className="block text-sm text-white/70">{t("servicesLabel")}</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {services.map((s) => (
                <label
                  key={s.key}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white/90 hover:border-white/20"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={s.key}
                    className="h-4 w-4"
                  />
                  <span>{s.label}</span>
                </label>
              ))}
            </div>
            <div className="mt-2 text-xs text-white/40">{t("demoNote")}</div>
          </div>

          <div>
            <label className="block text-sm text-white/70">{t("message")}</label>
            <textarea
              name="message"
              className="mt-2 min-h-28 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/25"
              placeholder={t("message")}
            />
          </div>

          <button
            className="mt-2 w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
            type="submit"
          >
            {t("send")}
          </button>
        </form>
      </div>
    </main>
  );
}
