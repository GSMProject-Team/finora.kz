import Header from "./components/Header";
import LanguageSwitch from "./components/LanguageSwitch";
import Link from "next/link";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="card w-full max-w-[760px]">
          <Header />

          <div className="mt-7 flex flex-col items-center gap-5">
            <Link href="/request" className="btnPrimary w-full sm:w-[420px] text-center">
              Start consultation
            </Link>

            <LanguageSwitch />
          </div>
        </div>
      </main>
    </Providers>
  );
}
