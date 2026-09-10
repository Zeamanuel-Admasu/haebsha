import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qesem Habesha Libs | Tradition, made yours",
  description:
    "Premium Habesha fashion designs and custom garments made through Ethiopian craftsmanship."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
