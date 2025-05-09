
import { cn } from "@/lib/utils";
import React from "react";


export function CardContent({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        className
      )}
    >
      {children}
    </div>
  );
}
