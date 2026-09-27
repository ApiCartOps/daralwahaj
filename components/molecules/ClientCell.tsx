export function ClientCell({ num, name }: { num: string; name: string }) {
  return (
    <div className="flex min-h-[84px] flex-col justify-between gap-2.5 border-b border-r border-ink/16 px-4.5 py-5 transition-colors hover:bg-accent/[.06]">
      <span className="font-body font-semibold text-xs leading-none tracking-[.1em] text-accent">
        {num}
      </span>
      <span className="font-heading font-semibold text-lg leading-[1.1] tracking-[.02em] uppercase">
        {name}
      </span>
    </div>
  );
}
