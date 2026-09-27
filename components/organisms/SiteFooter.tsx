import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/[.78]">
      <div className="mx-auto max-w-[1280px] px-5 pb-7 pt-14 sm:px-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Image
            src="/assets/logo-white.png"
            alt="DAW Tech Services"
            width={180}
            height={52}
            className="h-[52px] w-auto"
          />
          <p className="m-0 font-body font-semibold text-[13px] leading-[1.6] tracking-[.14em] uppercase text-orange">
            Smart solutions · Reliable services · A better tomorrow
          </p>
        </div>
        <div className="my-6 h-px bg-white/14" />
        <div className="flex flex-wrap justify-between gap-4 font-body font-normal text-sm leading-[1.6]">
          <span>Data Center | CCTV | Fiber Optics | Cat6 | HVAC | Electromechanical | Cleaning Services</span>
          <span>© 2026 Dar Alwahaj Technical Services LLC · Dubai, UAE</span>
        </div>
        <div className="mt-4 pt-4 border-t border-white/12 text-center font-body font-normal text-xs leading-[1.6] text-white/60">
          <p className="m-0">
            Design and Developed by{" "}
            <a href="https://junkwebhosting.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light transition-colors">
              JWD · junkwebhosting.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
