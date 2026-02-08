import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Finora.kz",
  description: "Finora.kz — бухгалтерия, қаржы және заңгерлік қызметтер платформасы.",
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
