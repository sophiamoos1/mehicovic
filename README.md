# mehicovic

Persönliche Lern-App für Bosnisch (Next.js 16, React 19, TypeScript, Tailwind, Prisma 7, PostgreSQL, Auth.js).

Nur ein Nutzer, Login ja, Registrierung nein. Pastell-Design (Rosa, Hellblau, Hellgrün), responsiv von Handy bis Ultrawide, installierbar als PWA.

## Lokal starten

```bash
npm install                 # erzeugt über postinstall auch den Prisma-Client
cp .env.example .env.local  # dann DATABASE_URL, AUTH_SECRET, SEED_EMAIL, SEED_PASSWORD ausfüllen
npm run db:migrate          # legt die Tabellen an (beim ersten Mal Name der Migration eingeben, z. B. init)
npm run db:seed             # legt deinen Account an (oder setzt das Passwort neu)
npm run dev                 # http://localhost:3000
```

Hinweis: Next.js 16 ist neu. Die passende Doku liegt lokal unter `node_modules/next/dist/docs/`.

## Hosting (gratis)

- Datenbank: Neon (Postgres, Free-Tier), `DATABASE_URL` aus dem Dashboard
- App: Vercel (Hobby), Repo verbinden und dieselben Variablen eintragen: `DATABASE_URL`, `AUTH_SECRET`
- Migrationen auf der Produktions-DB: `npm run db:deploy` (mit `DATABASE_URL` der Produktion), Account danach mit `npm run db:seed`

## Aufbau

- `src/app/(app)/…`: die geschützten Seiten (Heute, Plan, Kalender, Quick-Quiz, Wortschatz, Fortschritt, Claude)
- `src/app/login`: Login-Seite
- `src/proxy.ts`: schickt Nicht-Eingeloggte auf `/login` (in Next.js 16 heisst Middleware jetzt Proxy)
- `src/auth.ts`, `src/auth.config.ts`: Auth.js mit E-Mail und Passwort, ein Account
- `src/components/ui`: kleine Komponenten im shadcn-Stil (Button, Card, Input, Badge, Progress)
- `prisma/schema.prisma`: Datenbankmodell (bisher nur `User`)

## Stand

Die Seiten zeigen noch Platzhalter-Daten aus dem Prototyp. Als Nächstes: Lehrplan-Modell und Import aus dem Google-Sheet.
