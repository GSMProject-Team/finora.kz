import "./globals.css";

export const metadata = {
  title: "Finora.kz",
  description: "Accounting / Finance / Legal services platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}
