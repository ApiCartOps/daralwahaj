"use client";

import { useEffect, useRef } from "react";
import { BlueprintFrame } from "@/components/atoms/BlueprintFrame";
import { CheckListItem } from "@/components/atoms/CheckListItem";
import { SectionKicker } from "@/components/atoms/SectionKicker";
import { ServiceChainStep } from "@/components/molecules/ServiceChainStep";
import { ServiceTabButton } from "@/components/molecules/ServiceTabButton";
import { CHAIN } from "@/data/content";
import { SERVICES, pad } from "@/data/services";
import { Icon } from "@/lib/icons";
import { useActiveService } from "@/hooks/useActiveService";

export function ServicesSection() {
  const { index: svc, setIndex: setSvc } = useActiveService();
  const panelRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const current = SERVICES[svc];

  useEffect(() => {
    if (!isFirstRender.current) {
      panelRef.current?.animate?.(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 500, easing: "cubic-bezier(.2,.7,.2,1)" }
      );
    }
    isFirstRender.current = false;
  }, [svc]);

  return (
    <section id="services" className="scroll-mt-[72px] border-t border-ink/12">
      <div className="mx-auto max-w-[1280px] px-5 py-[clamp(72px,9vw,128px)] sm:px-16">
        <SectionKicker>Our core services</SectionKicker>
        <h2 className="max-w-[18ch] font-heading font-semibold text-[clamp(34px,4.4vw,58px)] leading-none uppercase">
          Six disciplines, one service partner
        </h2>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-14">
          <div role="tablist" className="flex flex-col border-t border-ink/16">
            {SERVICES.map((s, k) => (
              <ServiceTabButton
                key={s.id}
                service={s}
                num={pad(k + 1)}
                active={k === svc}
                onSelect={() => setSvc(k)}
              />
            ))}
          </div>

          <BlueprintFrame
            ref={panelRef}
            className="grid min-w-0 grid-cols-1 gap-8 p-5 sm:p-9 lg:grid-cols-2"
          >
            <div className="blueprint duotone relative aspect-[4/5] max-h-[520px] min-h-[280px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/assets/${current.photo}`}
                alt={current.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <i className="corner tl pointer-events-none" />
              <i className="corner tr pointer-events-none" />
              <i className="corner bl pointer-events-none" />
              <i className="corner br pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center gap-3 text-accent">
                <Icon name={current.icon} size={30} />
                <span className="font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase">
                  Service {pad(svc + 1)}
                </span>
              </div>
              <h3 className="mt-4.5 font-heading font-semibold text-[clamp(28px,3vw,40px)] leading-none uppercase">
                {current.name}
              </h3>
              <p className="mt-4 font-body font-normal text-base leading-[1.6] text-ink/80">
                {current.desc}
              </p>
              <p className="mb-3 mt-6.5 font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase text-accent">
                Services include
              </p>
              <ul className="m-0 list-none border-t border-ink/14 p-0">
                {current.items.map((it) => (
                  <CheckListItem key={it}>{it}</CheckListItem>
                ))}
              </ul>
            </div>
          </BlueprintFrame>
        </div>

        <div className="mt-[clamp(72px,8vw,112px)] grid items-end gap-6 sm:grid-cols-2 sm:gap-x-16">
          <div>
            <p className="m-0 font-body font-semibold text-[13px] leading-none tracking-[.1em] uppercase text-accent">
              Integrated technical solutions
            </p>
            <h3 className="mt-4 font-heading font-semibold text-[clamp(28px,3vw,40px)] leading-[1.02] uppercase">
              Multiple technical services through a single professional service partner
            </h3>
          </div>
          <p className="m-0 font-body font-normal text-base leading-[1.6] text-ink/80">
            At DAW Tech Services, our strength lies in providing multiple technical services
            through a single professional service partner. This integrated approach can help
            clients simplify service coordination while maintaining consistent standards across
            their facilities.
          </p>
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-2.5">
          {CHAIN.map((c, k) => (
            <ServiceChainStep key={c} label={c} showArrow={k < CHAIN.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
