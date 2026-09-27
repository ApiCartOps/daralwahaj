import Link from "next/link";
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
          <Link
            href="/assets/DAW-Tech-Company-Profile.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 rounded bg-accent px-5 py-3 font-body font-semibold text-white transition-all hover:bg-accent-600 active:scale-95"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm0 2h12v10H4V5z" />
              <path d="M7 7h6v2H7V7zm0 3h6v2H7v-2zm0 3h3v2H7v-2z" />
            </svg>
            Download Company Profile
          </Link>
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
