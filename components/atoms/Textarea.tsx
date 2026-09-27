import { forwardRef, type TextareaHTMLAttributes } from "react";
import { inputClasses } from "./Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 5, ...rest }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={[inputClasses, "leading-relaxed resize-y", className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
});
