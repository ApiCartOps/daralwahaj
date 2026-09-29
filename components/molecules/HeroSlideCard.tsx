import { BlueprintFrame } from "@/components/atoms/BlueprintFrame";
import { Icon } from "@/lib/icons";
import type { Service } from "@/types/service";

export function HeroSlideCard({
  service,
  num,
  active,
  onSelect,
}: {
  service: Service;
  num: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      data-card
      className="absolute left-1/2 top-1/2 [transform-style:preserve-3d] will-change-transform transition-[transform,opacity,filter] duration-[950ms]"
      style={{
        width: "var(--cw)",
        height: "calc(var(--cw) * 1.25)",
        margin: "calc(var(--cw) * -.625) 0 0 calc(var(--cw) / -2)",
        transitionTimingFunction: "cubic-bezier(.2,.75,.2,1)",
      }}
    >
      <BlueprintFrame
        duotone
        cornerColor="rgba(255,255,255,.7)"
        className="absolute inset-0 border-white/30 bg-navy-mid shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/${service.photo}`}
          alt={`${service.name} - ${service.desc}`}
          title={service.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top,rgba(4,27,61,.95) 0%,rgba(4,27,61,.55) 32%,transparent 58%)",
          }}
        />
        <div className="pointer-events-none absolute left-[18px] right-[18px] top-[18px] flex justify-between font-body font-semibold text-xs uppercase tracking-[.12em] text-white/85">
          <span>DAW Tech</span>
          <span className="text-orange">{num}</span>
        </div>
        <div className="pointer-events-none absolute bottom-[22px] left-[22px] right-[22px]">
          <div className="text-orange">
            <Icon name={service.icon} size={30} />
          </div>
          <h3 className="mt-3 font-heading font-semibold text-[clamp(22px,2.2vw,30px)] leading-none uppercase text-white">
            {service.name}
          </h3>
        </div>
      </BlueprintFrame>
      {!active && (
        <button
          type="button"
          aria-label={`Show ${service.name}`}
          onClick={onSelect}
          className="absolute inset-0 z-[5] cursor-pointer border-0 bg-transparent p-0"
        />
      )}
    </div>
  );
}
