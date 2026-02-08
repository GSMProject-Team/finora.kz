"use client";

import Header from "./components/Header";
import Link from "next/link";
import { useLang } from "./providers";

export default function Home() {
  const { t } = useLang();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-10 text-center">
        <Header />

        <Link
          href="/request"
          className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
        >
          {t("start")}
        </Link>
      </div>
    </main>
  );
}
