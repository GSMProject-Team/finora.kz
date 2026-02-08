"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getLang, texts } from "../lib/i18n";

export default function RequestPage() {
  const sp = useSearchParams();
  const lang = getLang(sp.get("lang") || undefined);
  const t = texts[lang];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    console.log("REQUEST (demo):", data);
    alert(t.form.alert);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 text-white">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">{t.form.title}</h1>
          <Link
            href={`/?lang=${lang}`}
            className="text-sm text-white/70 hover:text-white"
          >
            {t.back}
          </Link>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-white/70">{t.form.name}</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2 outline-none focus:border-white/30"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">{t.form.email}</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2 outline-none focus:border-white/30"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">{t.form.service}</label>
            <select
              name="service"
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2 outline-none focus:border-white/30"
              defaultValue="finance"
            >
              <option value="accounting">{t.form.services.accounting}</option>
              <option value="finance">{t.form.services.finance}</option>
              <option value="legal">{t.form.services.legal}</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-white/70">{t.form.message}</label>
            <textarea
              name="message"
              rows={5}
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2 outline-none focus:border-white/30"
            />
          </div>

          <button className="w-full rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600">
            {t.form.send}
          </button>

          <p className="text-xs text-white/50">{t.form.note}</p>
        </form>
      </div>
    </main>
  );
}
