import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vrvo - Strategic Digital Marketing",
  description: "Transform your business through strategic digital marketing. Vrvo combines advanced programmatic advertising, integrated marketing strategy, and business transformation consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
