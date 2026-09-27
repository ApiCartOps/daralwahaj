export function HeroPaginationTab({
  index,
  num,
  short,
  active,
  onSelect,
}: {
  index: number;
  num: string;
  short: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "relative flex-[1_0_118px] py-4 pb-1 text-left font-body font-semibold text-xs leading-tight tracking-[.08em] uppercase transition-colors hover:text-white",
        active ? "text-white" : "text-white/60",
      ].join(" ")}
    >
      <span className="absolute inset-x-0 top-0 h-0.5 bg-white/18" />
      <span
        data-prog={index}
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-orange"
      />
      <span className="flex gap-2">
        <span className="text-orange">{num}</span>
        <span>{short}</span>
      </span>
    </button>
  );
}
