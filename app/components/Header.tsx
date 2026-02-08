import Image from "next/image";

type Lang = "kk" | "ru" | "en";

const brandByLang: Record<Lang, string> = {
  kk: "Finora.kz",
  ru: "Finora.kz",
  en: "Finora.kz",
};

export default function Header({ lang }: { lang: Lang }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Image
        src="/logo.png"
        alt="Finora.kz logo"
        width={220}
        height={80}
        priority
      />
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        {brandByLang[lang]}
      </h1>
    </div>
  );
}
