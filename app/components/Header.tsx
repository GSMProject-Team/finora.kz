"use client";

import Image from "next/image";
import { useLang } from "../providers";

export default function Header() {
  const { t } = useLang();

  return (
    <div className="flex flex-col items-center">
      <div className="logoWrap">
        <Image
          src="/logo.png"
          alt="Finora.kz logo"
          width={340}
          height={110}
          priority
          className="h-auto w-[260px] sm:w-[320px]"
        />
      </div>

      {/* Егер “Finora.kz” текстін мүлде қаламасаң — осыны өшір */}
      <div className="mt-2 text-white/70 text-sm sm:text-base text-center max-w-[42ch]">
        {t("tagline")}
      </div>
    </div>
  );
}
