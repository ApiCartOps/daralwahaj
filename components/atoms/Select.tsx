import { forwardRef, type SelectHTMLAttributes } from "react";
import { inputClasses } from "./Input";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...rest }, ref) {
  return (
    <select ref={ref} className={[inputClasses, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </select>
  );
});
