import type { AnchorHTMLAttributes } from "react";

export function NavLink({
  light,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { light: boolean }) {
  return (
    <a
      className={[
        "font-body font-semibold text-sm leading-none tracking-[.08em] uppercase py-2 transition-colors",
        light ? "text-ink hover:text-orange" : "text-white hover:text-orange",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}
