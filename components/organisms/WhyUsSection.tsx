import { SectionKicker } from "@/components/atoms/SectionKicker";
import { WhyCard } from "@/components/molecules/WhyCard";
import { WHY } from "@/data/content";
import { pad } from "@/data/services";

export function WhyUsSection() {
  return (
    <section className="border-t border-ink/12">
      <div className="mx-auto max-w-[1280px] px-5 py-[clamp(72px,9vw,128px)] sm:px-16">
        <SectionKicker>Why choose DAW Tech Services</SectionKicker>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {WHY.map((w, k) => (
            <WhyCard key={w.title} num={pad(k + 1)} title={w.title} text={w.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
