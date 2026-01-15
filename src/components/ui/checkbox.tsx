import * as React from "react";
import { clsx } from "clsx";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={clsx(
          "h-4 w-4 rounded border border-neutral-300 align-middle",
          "focus:outline-none focus:ring-2 focus:ring-neutral-400",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";