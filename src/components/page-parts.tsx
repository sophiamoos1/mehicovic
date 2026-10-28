import { cn } from "@/lib/utils";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="mb-4 text-2xl font-semibold">{children}</h1>;
}

/** Responsives Kachel-Raster: 1 Spalte am Handy, mehr auf Laptop und Ultrawide. */
export function CardGrid({
  children,
  min = 300,
  className,
}: {
  children: React.ReactNode;
  min?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("grid gap-4", className)}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))` }}
    >
      {children}
    </div>
  );
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return <p className="mt-6 text-sm text-muted-foreground">{children}</p>;
}
