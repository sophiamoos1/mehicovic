import { AppNav } from "@/components/app-nav";
import { signOut } from "@/auth";

async function logout() {
  "use server";
  await signOut({ redirectTo: "/login" });
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex">
      <AppNav logoutAction={logout} />
      {/* Inhalt: auf Ultrawide begrenzt, damit nichts unlesbar breit wird */}
      <main className="mx-auto w-full max-w-[1800px] flex-1 px-4 pt-5 pb-24 md:px-8 md:pt-8 md:pb-10">
        {children}
      </main>
    </div>
  );
}
