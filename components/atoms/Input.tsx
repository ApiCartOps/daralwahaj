import { forwardRef, type InputHTMLAttributes } from "react";

export const inputClasses =
  "input min-h-[44px] w-full font-body font-normal text-base normal-case tracking-normal text-ink bg-[#e9e9ea] border border-ink/16 px-2.5 py-1.5 focus-visible:border-accent";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...rest }, ref) {
    return (
      <input ref={ref} className={[inputClasses, className].filter(Boolean).join(" ")} {...rest} />
    );
  }
);
