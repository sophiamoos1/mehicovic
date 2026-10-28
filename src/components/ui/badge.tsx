import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-block rounded-full px-2.5 py-0.5 text-xs font-medium", {
  variants: {
    tone: {
      green: "bg-pastel-green",
      pink: "bg-pastel-pink",
      blue: "bg-pastel-blue",
    },
  },
  defaultVariants: { tone: "green" },
});

function Badge({
  className,
  tone,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

export { Badge };
