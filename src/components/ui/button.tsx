import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
          "bg-neutral-900 text-white hover:bg-neutral-800",
          "focus:outline-none focus:ring-2 focus:ring-neutral-400",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";