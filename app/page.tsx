"use client";

import { useRouter } from "next/navigation";
import Header from "./components/Header";
import { useLang } from "./providers";

export default function Home() {
  const router = useRouter();
  const { t } = useLang();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-[720px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-10 py-10 text-center">
        <Header />

        <button
          className="mt-8 w-full rounded-xl bg-blue-500 px-6 py-3 text-base font-medium text-white hover:bg-blue-600"
          onClick={() => router.push("/request")}
          type="button"
        >
          {t("start")}
        </button>
      </div>
    </main>
  );
}
