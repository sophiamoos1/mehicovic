import { cn } from "@/lib/utils";

type Props = {
  value: number;
  tone?: "pink" | "blue" | "green";
  className?: string;
};

const fill = {
  pink: "bg-primary",
  blue: "bg-secondary",
  green: "bg-accent",
};

function Progress({ value, tone = "pink", className }: Props) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2.5 w-full overflow-hidden rounded-full bg-muted", className)}
    >
      <div className={cn("h-full rounded-full", fill[tone])} style={{ width: `${value}%` }} />
    </div>
  );
}

export { Progress };
