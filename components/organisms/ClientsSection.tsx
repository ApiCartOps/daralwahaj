import { CheckListItem } from "@/components/atoms/CheckListItem";
import { SectionKicker } from "@/components/atoms/SectionKicker";
import { ClientCell } from "@/components/molecules/ClientCell";
import { CLIENTS, QUALITY } from "@/data/content";
import { pad } from "@/data/services";

export function ClientsSection() {
  return (
    <section id="clients" className="scroll-mt-[72px]">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-[clamp(48px,6vw,80px)] sm:px-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionKicker>Quality &amp; safety</SectionKicker>
          <h2 className="font-heading font-semibold text-[clamp(30px,3.6vw,46px)] leading-[1.02] uppercase">
            Safety and quality are fundamental to our service approach.
          </h2>
          <p className="mt-5 font-body font-normal text-base leading-[1.6] text-ink/80">
            We aim to ensure that all activities are performed using appropriate procedures,
            qualified personnel, suitable equipment, and responsible work practices.
          </p>
          <p className="mb-3 mt-7 font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase text-accent">
            Our focus includes
          </p>
          <ul className="m-0 grid list-none grid-cols-1 gap-x-7 p-0 sm:grid-cols-2">
            {QUALITY.map((q) => (
              <CheckListItem key={q} icon="shield">
                {q}
              </CheckListItem>
            ))}
          </ul>
        </div>
        <div>
          <SectionKicker>Our clients</SectionKicker>
          <h2 className="font-heading font-semibold text-[clamp(30px,3.6vw,46px)] leading-[1.02] uppercase">
            We support a wide range of customers and facilities
          </h2>
          <div className="mt-8 grid grid-cols-2 border-l border-t border-ink/16 sm:grid-cols-3">
            {CLIENTS.map((c, k) => (
              <ClientCell key={c} num={pad(k + 1)} name={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
