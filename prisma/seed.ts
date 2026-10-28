import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../src/generated/prisma/client";

// Legt den einen Nutzer an (oder setzt sein Passwort neu). Aufruf: npm run db:seed
async function main() {
  const email = process.env.SEED_EMAIL?.toLowerCase().trim();
  const password = process.env.SEED_PASSWORD;
  const connectionString = process.env.DATABASE_URL;
  if (!email || !password) throw new Error("SEED_EMAIL und SEED_PASSWORD müssen gesetzt sein.");
  if (!connectionString) throw new Error("DATABASE_URL fehlt.");

  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
  try {
    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.user.upsert({
      where: { email },
      update: { passwordHash },
      create: { email, name: "Sophia", passwordHash },
    });
    console.log(`Nutzer ${email} ist angelegt bzw. aktualisiert.`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
