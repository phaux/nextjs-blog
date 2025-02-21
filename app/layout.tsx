import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proassist Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={
          "scheme-light-dark text-slate-800 dark:text-slate-200 bg-white dark:bg-zinc-950 font-sans " +
          "flex flex-col gap-8 lg:gap-16 py-8 lg:py-16"
        }
      >
        {children}
      </body>
    </html>
  );
}
