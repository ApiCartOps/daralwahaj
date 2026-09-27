"use client";

import { NAV } from "@/data/content";
import { IconButton } from "@/components/atoms/IconButton";

export function MobileMenuToggle({
  open,
  light,
  onToggle,
}: {
  open: boolean;
  light: boolean;
  onToggle: () => void;
}) {
  return (
    <IconButton
      aria-label="Menu"
      onClick={onToggle}
      className={[
        "ml-auto lg:hidden",
        light ? "border-ink/20 text-ink" : "border-white/30 text-white",
      ].join(" ")}
    >
      {open ? (
        <svg
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      ) : (
        <svg
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      )}
    </IconButton>
  );
}

export function MobileMenuPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav className="flex flex-col bg-paper px-5 pb-5 pt-2 sm:px-16 lg:hidden">
      {NAV.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={onNavigate}
          className="border-b border-ink/10 py-4 font-heading font-semibold text-xl tracking-[.04em] text-ink uppercase"
        >
          {l.label}
        </a>
      ))}
      <a
        href="#contact"
        onClick={onNavigate}
        className="mt-4 flex justify-center bg-orange px-4 py-4 font-body font-semibold text-[15px] uppercase tracking-[.06em] text-navy-deep"
      >
        Get in touch
      </a>
    </nav>
  );
}
