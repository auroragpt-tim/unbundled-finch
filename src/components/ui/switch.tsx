import * as React from "react";
import { clsx } from "clsx";

export interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className = "",
      checked,
      defaultChecked = false,
      disabled,
      onCheckedChange,
      ...props
    },
    ref
  ) => {
    const [internal, setInternal] = React.useState(defaultChecked);
    const isControlled = typeof checked === "boolean";
    const value = isControlled ? checked : internal;

    const toggle = () => {
      if (disabled) return;
      const next = !value;
      if (!isControlled) setInternal(next);
      onCheckedChange?.(next);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={value}
        disabled={disabled}
        onClick={toggle}
        className={clsx(
          "relative inline-flex h-6 w-10 items-center rounded-full border transition-colors",
          value ? "bg-neutral-900" : "bg-white",
          "border-neutral-300 disabled:cursor-not-allowed disabled