"use client";

import Header from "./components/Header";
import { useRouter } from "next/navigation";
import { useLang } from "./providers";

export default function Home() {
  const router = useRouter();
  const { t } = useLang();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-10 text-center">
        <Header />

        <button
          onClick={() => router.push("/request")}
          className="mt-6 w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
        >
          {t("start")}
        </button>
      </div>
    </main>
  );
}
