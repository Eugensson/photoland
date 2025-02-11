import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "Photoland",
  description: "e-commerce for photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} antialiased`}>{children}</body>
    </html>
  );
}
