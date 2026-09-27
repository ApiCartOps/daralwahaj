import { forwardRef, type ElementType, type ComponentPropsWithoutRef, type ReactNode } from "react";

/** The four "+" registration marks every blueprint object wears. */
function Corners({ color }: { color?: string }) {
  return (
    <>
      <i className="corner tl" style={color ? { color } : undefined} />
      <i className="corner tr" style={color ? { color } : undefined} />
      <i className="corner bl" style={color ? { color } : undefined} />
      <i className="corner br" style={color ? { color } : undefined} />
    </>
  );
}

type BlueprintFrameProps<T extends ElementType> = {
  as?: T;
  duotone?: boolean;
  cornerColor?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

/**
 * The wireframe frame every card, figure and primary button wears: a
 * hairline border with a "+" mark drawn just outside each corner. Ported
 * from the Industry design system's `.blueprint` component.
 */
function BlueprintFrameInner<T extends ElementType = "div">(
  { as, duotone, cornerColor, className, children, ...rest }: BlueprintFrameProps<T>,
  ref: React.Ref<Element>
) {
  const Tag = (as || "div") as ElementType;
  const classes = ["blueprint", duotone && "duotone", className].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
      <Corners color={cornerColor} />
    </Tag>
  );
}

export const BlueprintFrame = forwardRef(BlueprintFrameInner) as <T extends ElementType = "div">(
  props: BlueprintFrameProps<T> & { ref?: React.Ref<Element> }
) => ReturnType<typeof BlueprintFrameInner>;
