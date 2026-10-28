import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bosnisch Lernen",
  description: "Persönliche Lern-App für Bosnisch",
  appleWebApp: { capable: true, title: "Bosnisch", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#fbd5e3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
