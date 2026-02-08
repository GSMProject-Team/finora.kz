import "./globals.css";

export const metadata = {
  title: "Finora.kz — Finance • Legal • Accounting",
  description:
    "Finora — бухгалтерлік, қаржылық және заңгерлік-құқықтық қызметтерге арналған платформа.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}
