"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  CalendarDays,
  Home,
  ListChecks,
  LogOut,
  MessageCircle,
  TrendingUp,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Heute", icon: Home },
  { href: "/plan", label: "Plan", icon: ListChecks },
  { href: "/kalender", label: "Kalender", icon: CalendarDays },
  { href: "/quick-quiz", label: "Quick-Quiz", icon: Zap },
  { href: "/wortschatz", label: "Wortschatz", icon: BookOpen },
  { href: "/fortschritt", label: "Fortschritt", icon: TrendingUp },
  { href: "/claude", label: "Claude", icon: MessageCircle },
];

export function AppNav({ logoutAction }: { logoutAction: () => Promise<void> }) {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav
      aria-label="Hauptnavigation"
      className={cn(
        "z-30 bg-pastel-blue",
        // Handy: Leiste unten, ab md: Seitenleiste links
        "fixed inset-x-0 bottom-0 flex justify-around p-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]",
        "md:sticky md:top-0 md:inset-x-auto md:h-screen md:w-52 md:flex-col md:justify-start md:gap-1 md:p-4",
      )}
    >
      <p className="mb-3 hidden px-3 text-lg font-semibold md:block">🌸 Bosnisch</p>
      {items.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          aria-current={isActive(href) ? "page" : undefined}
          className={cn(
            "flex flex-col items-center gap-0.5 rounded-md px-1 py-1.5 text-[11px] transition-colors",
            "md:flex-row md:gap-3 md:px-3 md:py-2.5 md:text-[15px]",
            isActive(href) ? "bg-card font-semibold" : "hover:bg-card/60",
          )}
        >
          <Icon className="size-5" aria-hidden />
          <span className="max-md:max-w-[56px] max-md:truncate">{label}</span>
        </Link>
      ))}
      <form action={logoutAction} className="hidden md:mt-auto md:block">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-[15px] hover:bg-card/60"
        >
          <LogOut className="size-5" aria-hidden /> Abmelden
        </button>
      </form>
    </nav>
  );
}
