import { Icon } from "@/lib/icons";
import type { Service } from "@/types/service";

export function ServiceTabButton({
  service,
  num,
  active,
  onSelect,
}: {
  service: Service;
  num: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={[
        "flex min-h-16 items-center gap-4 border-0 border-b border-ink/16 px-4 py-4.5 text-left transition-colors",
        active ? "bg-accent text-white" : "bg-transparent text-ink hover:bg-accent/[.07]",
      ].join(" ")}
    >
      <span
        className={[
          "font-body font-semibold text-[13px] leading-none tracking-[.08em]",
          active ? "text-orange" : "text-accent",
        ].join(" ")}
      >
        {num}
      </span>
      <span className="flex-none">
        <Icon name={service.icon} size={22} />
      </span>
      <span className="font-heading font-semibold text-[19px] leading-[1.1] tracking-[.02em] uppercase">
        {service.name}
      </span>
    </button>
  );
}
