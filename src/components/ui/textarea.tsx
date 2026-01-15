import * as React from "react";
import { clsx } from "clsx";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className = "", ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(
        "flex min-h-[80px] w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm " +
          "placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 " +
          "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";