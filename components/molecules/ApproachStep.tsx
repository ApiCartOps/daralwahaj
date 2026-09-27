export function ApproachStep({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <li className="relative border-t border-white/28 pt-7">
      <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] bg-orange" />
      <div className="font-body font-semibold text-[15px] leading-none tracking-[.1em] text-orange">
        {num}
      </div>
      <h3 className="mt-3.5 font-heading font-semibold text-[26px] leading-none tracking-[.03em] uppercase text-white">
        {title}
      </h3>
      <p className="mt-3 font-body font-normal text-[15px] leading-[1.55] text-white/[.78]">
        {text}
      </p>
    </li>
  );
}
