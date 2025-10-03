import type { Metadata } from "next";
import "./globals.css";
import LoadingWrapper from "./components/LoadingWrapper";
import NoiseOverlay from "./components/NoiseOverlay";

export const metadata: Metadata = {
  title: "Vrvo - Next-Generation Marketing",
  description: "Transform your digital presence into growth with cutting-edge programmatic advertising, data-driven digital marketing, and business transformation strategies.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  themeColor: "#1e293b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NoiseOverlay />
        <LoadingWrapper loadingDuration={3000}>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
