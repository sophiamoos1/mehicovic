import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Next.js liest .env.local, die Prisma-CLI nicht von selbst: hier explizit laden.
config({ path: ".env.local" });
config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // Fallback nur, damit `prisma generate` (npm install) ohne Datenbank durchläuft.
    url: process.env.DATABASE_URL ?? "postgresql://user:pass@localhost:5432/unset",
  },
});
