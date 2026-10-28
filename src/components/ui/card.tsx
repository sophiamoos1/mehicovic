import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-lg p-5 text-card-foreground shadow-sm", {
  variants: {
    tone: {
      default: "bg-card",
      pink: "bg-pastel-pink",
      blue: "bg-pastel-blue",
      green: "bg-pastel-green",
    },
  },
  defaultVariants: { tone: "default" },
});

function Card({
  className,
  tone,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>) {
  return <div className={cn(cardVariants({ tone }), className)} {...props} />;
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("mb-2 text-base font-semibold", className)} {...props} />;
}

export { Card, CardTitle };
