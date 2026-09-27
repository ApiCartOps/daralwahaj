import { Icon } from "@/lib/icons";

/** A row with a small check/shield icon, used for "services include" and
 * "quality focus" lists. */
export function CheckListItem({
  children,
  icon = "check",
  bordered = true,
}: {
  children: string;
  icon?: "check" | "shield";
  bordered?: boolean;
}) {
  return (
    <li
      className={[
        "flex items-center gap-3 py-2.5 font-body font-medium text-[15px] leading-snug",
        bordered ? "border-b border-ink/10" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon === "check" ? (
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f39a1e"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-none"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0b4a8f"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-none"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )}
      {children}
    </li>
  );
}
