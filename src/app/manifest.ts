import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bosnisch Lernen",
    short_name: "Bosnisch",
    description: "Persönliche Lern-App für Bosnisch",
    start_url: "/",
    display: "standalone",
    background_color: "#fff9fb",
    theme_color: "#fbd5e3",
    lang: "de",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
