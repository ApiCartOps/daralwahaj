import { BlueprintFrame } from "@/components/atoms/BlueprintFrame";

export function WhyCard({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <BlueprintFrame className="px-6 pb-[30px] pt-7 transition-transform duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5 hover:border-accent">
      <div className="font-heading font-semibold text-[44px] leading-none text-orange">
        {num}
      </div>
      <h3 className="mt-5.5 font-heading font-semibold text-[22px] leading-[1.05] uppercase">
        {title}
      </h3>
      <p className="mt-3 font-body font-normal text-[15px] leading-[1.55] text-ink/[.78]">
        {text}
      </p>
    </BlueprintFrame>
  );
}
