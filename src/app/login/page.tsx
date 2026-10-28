import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

async function login(formData: FormData) {
  "use server";
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) redirect("/login?error=1");
    throw error; // Der erfolgreiche Login wirft intern einen Redirect.
  }
}

// searchParams sind Request-Daten: mit Cache Components müssen sie in <Suspense> gelesen werden,
// damit der Rest der Seite trotzdem vorab gerendert werden kann.
async function LoginError({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  if (!error) return null;
  return <p className="text-sm text-destructive">E-Mail oder Passwort stimmt nicht.</p>;
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pastel-pink/40 p-4">
      <Card className="w-full max-w-sm">
        <h1 className="mb-1 text-2xl font-semibold">🌸 Bosnisch Lernen</h1>
        <p className="mb-5 text-sm text-muted-foreground">Bitte anmelden.</p>
        <form action={login} className="space-y-3">
          <Input name="email" type="email" placeholder="E-Mail" autoComplete="username" required />
          <Input
            name="password"
            type="password"
            placeholder="Passwort"
            autoComplete="current-password"
            required
          />
          <Suspense>
            <LoginError searchParams={searchParams} />
          </Suspense>
          <Button type="submit" className="w-full">
            Anmelden
          </Button>
        </form>
      </Card>
    </div>
  );
}
