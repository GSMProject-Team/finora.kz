import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Finora.kz — Бухгалтерия • Қаржы • Заңгерлік қызмет",
  description: "Finora — бухгалтерлік, қаржылық және заңгерлік-құқықтық қызметтер платформасы.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
