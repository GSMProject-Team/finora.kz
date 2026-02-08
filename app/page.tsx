import Header from "./components/Header";
import LanguageSwitch from "./components/LanguageSwitch";
import Link from "next/link";
import { getLang, texts } from "./lib/i18n";

export default function Home({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const lang = getLang(searchParams?.lang);
  const t = texts[lang];

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-8 text-center">
        <Header title={t.brand} />
        <p className="mt-2 text-white/70">{t.tagline}</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href={`/request?lang=${lang}`}
            className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            {t.cta}
          </Link>
        </div>

        <LanguageSwitch />
      </div>
    </main>
  );
}
