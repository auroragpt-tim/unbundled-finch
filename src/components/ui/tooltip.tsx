import * as React from "react";

type TooltipContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

export function TooltipProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export function Tooltip({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      {children}
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const ctx = React.useContext(TooltipContext);
  if (!ctx) return <>{children}</>;

  const handlers = {
    onMouseEnter: () => ctx.setOpen(true),
    onMouseLeave: () => ctx.setOpen(false),
    onFocus: () => ctx.setOpen(true),
    onBlur: () => ctx.setOpen(false),
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement,
      handlers
    );
  }

  return <span {...handlers}>{children}</span>;
}

export function TooltipContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(TooltipContext);
  if (!ctx || !ctx.open) return null;

  return (
    <span
      role="tooltip"
      className={
        "z-50 inline-block rounded-md border bg-white px-2 py-1 text-xs shadow " +
        className
      }
    >
      {children}
    </span>
  );
}