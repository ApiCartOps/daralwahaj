import { ApproachStep } from "@/components/molecules/ApproachStep";
import { STEPS } from "@/data/content";
import { pad } from "@/data/services";

export function ApproachSection() {
  return (
    <section id="approach" className="relative scroll-mt-[72px] overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 py-[clamp(72px,9vw,128px)] sm:px-16">
        <p className="m-0 font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase text-orange">
          Our service approach
        </p>
        <div className="mb-7 mt-3.5 h-px bg-white/20" />
        <h2 className="max-w-[20ch] font-heading font-semibold text-[clamp(34px,4.4vw,58px)] leading-none uppercase">
          From first survey to ongoing support
        </h2>
        <ol className="m-0 mt-14 grid list-none grid-cols-2 gap-x-7 gap-y-10 p-0 sm:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((s, k) => (
            <ApproachStep key={s.title} num={pad(k + 1)} title={s.title} text={s.text} />
          ))}
        </ol>
      </div>
    </section>
  );
}
