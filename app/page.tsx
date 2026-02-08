import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <Header />

        <div className="mt-8">
          <Link
            href="/request"
            className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600 transition"
          >
            Start consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
