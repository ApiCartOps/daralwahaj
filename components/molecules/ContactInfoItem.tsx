import type { ReactNode } from "react";

export function ContactInfoItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-ink/16 py-4.5">
      <span className="mt-0.5 flex-none text-accent">{icon}</span>
      <div>
        <div className="font-body font-semibold text-xs leading-none tracking-[.1em] uppercase text-ink/[.62]">
          {label}
        </div>
        <div className="mt-1.5 font-body font-medium text-base leading-snug">{children}</div>
      </div>
    </div>
  );
}
