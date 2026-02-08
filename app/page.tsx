"use client";

import { useRouter } from "next/navigation";
import Header from "./components/Header";
import { useLang } from "./providers";

export default function Home() {
  const router = useRouter();
  const { t } = useLang();

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-8 py-7">
        <Header />

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => router.push("/request")}
            className="w-full max-w-md rounded-xl bg-blue-500 px-6 py-3 text-base font-semibold text-white hover:bg-blue-600"
          >
            {t("start")}
          </button>
        </div>
      </div>
    </main>
  );
}
