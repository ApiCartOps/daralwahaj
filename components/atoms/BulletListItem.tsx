/** A small square bullet + text, used for the mission list. */
export function BulletListItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5 font-body font-medium text-[15px] leading-snug">
      <span className="mt-1.5 h-2 w-2 flex-none bg-orange" />
      {children}
    </li>
  );
}
