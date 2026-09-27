import type { ButtonHTMLAttributes } from "react";

/** A bordered square button used for slider arrows and the mobile menu toggle. */
export function IconButton({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={[
        "grid h-11 w-11 flex-none place-items-center border bg-transparent cursor-pointer transition-colors",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}
