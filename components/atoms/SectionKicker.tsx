import type { ReactNode } from "react";

/** The small uppercase label + hairline divider that opens every section. */
export function SectionKicker({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "orange";
}) {
  return (
    <>
      <p
        className={[
          "m-0 font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase",
          tone === "accent" ? "text-accent" : "text-orange",
        ].join(" ")}
      >
        {children}
      </p>
      <div className="mb-7 mt-3.5 h-px bg-ink/16" />
    </>
  );
}
