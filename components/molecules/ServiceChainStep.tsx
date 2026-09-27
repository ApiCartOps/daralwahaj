import { BlueprintFrame } from "@/components/atoms/BlueprintFrame";

export function ServiceChainStep({ label, showArrow }: { label: string; showArrow: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <BlueprintFrame className="whitespace-nowrap px-5 py-4 font-heading font-semibold text-lg leading-none tracking-[.04em] uppercase text-accent">
        {label}
      </BlueprintFrame>
      {showArrow && (
        <svg
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f39a1e"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </div>
  );
}
