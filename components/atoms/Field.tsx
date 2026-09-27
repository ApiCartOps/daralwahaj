import type { ReactNode } from "react";

export function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label
      className={[
        "grid gap-2 font-body font-semibold text-xs leading-none tracking-[.08em] uppercase",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
      {children}
    </label>
  );
}
