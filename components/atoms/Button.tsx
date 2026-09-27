import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { BlueprintFrame } from "./BlueprintFrame";

const base =
  "inline-flex items-center gap-2.5 font-heading font-semibold uppercase tracking-[.06em] cursor-pointer transition-colors";

const variants = {
  primary: `${base} bg-orange border border-orange text-navy-deep text-[15px] leading-none px-6 py-4 hover:bg-orange-light`,
  ghost:
    `${base} bg-transparent border border-white/35 text-white text-[15px] leading-none px-6 py-4 hover:bg-white/10`,
};

type Variant = keyof typeof variants;

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", children, className, ...rest } = props;
  const classes = [variants[variant], className].filter(Boolean).join(" ");

  if (variant === "primary") {
    if ("href" in rest && rest.href) {
      return (
        <BlueprintFrame
          as="a"
          className={classes}
          cornerColor="rgba(255,255,255,.55)"
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </BlueprintFrame>
      );
    }
    return (
      <BlueprintFrame
        as="button"
        type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
        className={classes}
        cornerColor="rgba(255,255,255,.55)"
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </BlueprintFrame>
    );
  }

  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
