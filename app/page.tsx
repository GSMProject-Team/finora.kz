import Header from "./components/Header";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-14">
        <Hero />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <ServiceCard
            title="Бухгалтерия"
            desc="Есеп жүргізу, айлық/тоқсандық есептілік, құжат айналым."
            items={["Айлық қызмет", "Есептілік", "Құжаттар"]}
          />
          <ServiceCard
            title="Финанс есеп"
            desc="P&L, Cashflow, басқарушылық есеп, талдау және жоспарлау."
            items={["P&L", "Cashflow", "Бюджет"]}
            highlight
          />
          <ServiceCard
            title="Юрист"
            desc="Келісімшарттар, тәуекел, құқықтық сүйемелдеу."
            items={["Шарттар", "Сотқа дейін", "Due diligence"]}
          />
        </div>

        <Process />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/10" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">FINORA</div>
            <div className="text-xs text-white/60">finance • legal • accounting</div>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#services">Қызметтер</a>
          <a className="hover:text-white" href="#process">Процесс</a>
          <a className="hover:text-white" href="#request">Өтінім</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#request"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"
          >
            Өтінім
          </a>
          <a
            href="#request"
            className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
          >
            Консультация
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5 blur-3xl" />
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Заманауи сервис • Telegram бастап
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Қаржы, бухгалтерия және құқық — бір жүйеде.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/70">
            Клиент өтінім жібереді (мәтін/аудио) → бот жауап береді → маман
            round-robin арқылы тағайындалады → ақылы консультация → қызмет.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#request"
              className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Өтінім жіберу
            </a>
            <a
              href="#services"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm ring-1 ring-white/15 hover:bg-white/15"
            >
              Қызметтерді көру
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-white/65">
            <Metric k="24/7" v="Telegram" />
            <Metric k="RBAC" v="Рөлдер" />
            <Metric k="Audit" v="Тарих" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="text-sm font-semibold">Өтінім карточкасы (Airtable стилі)</div>
          <div className="mt-4 grid gap-3 text-sm">
            <Row label="Тақырып" value="Финанс есеп: Cashflow талдау" />
            <Row label="Канал" value="Telegram • Voice" />
            <Row label="Статус" value="Consultation payment pending" />
            <Row label="Тағайындалды" value="Fin Specialist #2 (round-robin)" />
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
            Келесі: Google Calendar арқылы уақыт таңдау → төлем → консультация → қызмет.
          </div>
        </div>
      </div>

      <div id="services" className="pt-12" />
    </section>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-white/90">{k}</div>
      <div className="text-white/60">{v}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-white/60">{label}</div>
      <div className="text-white/90">{value}</div>
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  items,
  highlight,
}: {
  title: string;
  desc: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <section
      className={[
        "rounded-2xl border p-7",
        highlight
          ? "border-white/20 bg-white/10 ring-1 ring-white/15"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {highlight ? (
          <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-black">
            Core
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm text-white/75">
        {items.map((x) => (
          <li key={x} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            {x}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mt-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Процесс қалай жүреді</h2>
          <p className="mt-2 text-sm text-white/70">
            Алдымен адамдар жұмыс істейді. Кейін жүйе стандартты бөлігін өзі атқарады.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-4">
        <Step n="01" t="Өтінім" d="Клиент мәтін/аудио жібереді." />
        <Step n="02" t="Бөлу" d="Бот round-robin арқылы маманға береді." />
        <Step n="03" t="Консультация" d="Төлем → Calendar → call/чат." />
        <Step n="04" t="Қызмет" d="Есеп/құжат/нәтиже + ревью." />
      </div>

      <div id="request" className="pt-12" />
    </section>
  );
}

function Step({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs text-white/50">{n}</div>
      <div className="mt-2 text-base font-semibold">{t}</div>
      <div className="mt-2 text-sm text-white/70">{d}</div>
    </div>
  );
}

function CTA() {
  return (
    <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Ақылы консультациядан бастаймыз.
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Уақытты босқа кетірмейміз. Консультациядан кейін нақты жоспар + бағасы
            ұсынылады.
          </p>
        </div>

        <form className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="grid gap-3">
            <input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
              placeholder="Тақырып (мыс: Cashflow есеп)"
            />
            <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-white/25">
              <option>Бухгалтерия</option>
              <option>Финанс есеп</option>
              <option>Юрист</option>
            </select>
            <textarea
              className="min-h-[96px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
              placeholder="Қысқаша сипаттама (немесе Telegram-да аудио жібересіз)"
            />
            <button
              type="button"
              className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Өтінім жіберу (MVP)
            </button>
            <div className="text-xs text-white/50">
              MVP: бұл батырма тек UI. Келесі қадамда API + Telegram bot-қа жалғаймыз.
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Finora.kz</div>
        <div className="flex gap-6">
          <span>Telegram</span>
          <span>Email</span>
          <span>Алматы, KZ</span>
        </div>
      </div>
    </footer>
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          FINORA
        </h1>

        <p className="mt-2 text-white/70">
          Tech / Finance / Legal platform
        </p>

        <button className="mt-6 rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600">
          Start consultation
        </button>
      </div>
    </main>
  );
}

