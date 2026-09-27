export function FutureDirectionSection() {
  return (
    <section className="border-t border-ink/12">
      <div className="mx-auto grid max-w-[1280px] gap-6 px-5 py-[clamp(64px,8vw,112px)] sm:px-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="m-0 font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase text-accent">
            Future direction
          </p>
          <h2 className="mt-4 font-heading font-semibold text-[clamp(30px,3.6vw,46px)] leading-[1.02] uppercase">
            Long-term partnerships, built on dependable service
          </h2>
        </div>
        <div>
          <p className="m-0 font-body font-normal text-[17px] leading-[1.65] text-ink/80">
            DAW Tech Services aims to expand its technical capabilities and establish long-term
            partnerships with organizations requiring dependable infrastructure, maintenance,
            security, and facility-support services.
          </p>
          <p className="mt-4 font-body font-normal text-[17px] leading-[1.65] text-ink/80">
            We are committed to developing our people, improving our technical capabilities,
            adopting modern technologies, and delivering services that create long-term value
            for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
