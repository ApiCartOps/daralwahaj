import { BlueprintFrame } from "@/components/atoms/BlueprintFrame";
import { BulletListItem } from "@/components/atoms/BulletListItem";
import { SectionKicker } from "@/components/atoms/SectionKicker";
import { MISSION } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-[72px]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-[clamp(48px,6vw,80px)] sm:px-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionKicker>Company overview</SectionKicker>
          <h2 className="font-heading font-semibold text-[clamp(34px,4.4vw,58px)] leading-none uppercase">
            Dar Alwahaj Technical Services LLC
          </h2>
          <p className="mt-6 font-body font-normal text-[17px] leading-[1.65] text-ink/80">
            Dar Alwahaj Technical Services LLC, operating under the brand DAW Tech Services, is a
            UAE-based technical services company providing integrated engineering,
            infrastructure, security, facility management, and maintenance solutions.
          </p>
          <p className="mt-4 font-body font-normal text-[17px] leading-[1.65] text-ink/80">
            We deliver reliable and professional services to commercial, industrial,
            residential, and specialized facilities, with a strong focus on data centers, CCTV
            and security systems, structured cabling, fiber optics, HVAC, electromechanical
            systems, and cleaning services.
          </p>
          <p className="mt-4 font-body font-normal text-[17px] leading-[1.65] text-ink/80">
            Our objective is to provide clients with dependable technical solutions that improve
            operational efficiency, safety, reliability, and long-term asset performance.
          </p>
        </div>
        <div className="grid content-start gap-8">
          <BlueprintFrame className="p-6 sm:p-9">
            <p className="m-0 font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase text-accent">
              Our vision
            </p>
            <p className="mt-4 font-heading font-medium text-[clamp(22px,2.2vw,28px)] leading-[1.2]">
              To become a trusted technical services partner in the UAE, recognized for quality,
              reliability, innovation, and professional service delivery.
            </p>
          </BlueprintFrame>
          <BlueprintFrame className="p-6 sm:p-9">
            <p className="m-0 font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase text-accent">
              Our mission
            </p>
            <p className="mt-4 font-body font-normal text-base leading-[1.6] text-ink/80">
              To provide integrated technical and facility support solutions that meet our
              clients&apos; operational requirements through:
            </p>
            <ul className="m-0 mt-4.5 grid list-none grid-cols-1 gap-x-6 gap-y-2.5 p-0 sm:grid-cols-2">
              {MISSION.map((m) => (
                <BulletListItem key={m}>{m}</BulletListItem>
              ))}
            </ul>
          </BlueprintFrame>
        </div>
      </div>
    </section>
  );
}
