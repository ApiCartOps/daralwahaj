"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { IconButton } from "@/components/atoms/IconButton";
import { HeroSlideCard } from "@/components/molecules/HeroSlideCard";
import { HeroPaginationTab } from "@/components/molecules/HeroPaginationTab";
import { N, SERVICES, pad } from "@/data/services";
import { scrollToId } from "@/lib/utils";
import { useActiveService } from "@/hooks/useActiveService";

const AUTOPLAY_MS = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const mx = useRef(0);
  const my = useRef(0);
  const tmx = useRef(0);
  const tmy = useRef(0);
  const hover = useRef(false);
  const dragX0 = useRef<number | null>(null);
  const anim = useRef<Animation | null>(null);
  const reduced = useRef(false);
  const isFirstRender = useRef(true);

  const { setIndex: setActiveService } = useActiveService();

  const go = (next: number) => setIndex(((next % N) + N) % N);

  const layout = () => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = stage.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;
    const cw = cards[0].offsetWidth;
    const narrow = window.innerWidth < 720;
    cards.forEach((c, k) => {
      let o = k - index;
      if (o > N / 2) o -= N;
      if (o < -N / 2 + 0.5) o += N;
      const a = Math.abs(o);
      const tx = o * cw * (narrow ? 0.4 : 0.62);
      const ry = Math.max(-60, Math.min(60, -o * 42));
      const op = a >= 3 ? 0 : 1 - a * 0.2;
      c.style.transform = `translate3d(${tx}px,0,${-a * 240}px) rotateY(${ry}deg)`;
      c.style.opacity = String(op);
      c.style.filter = `brightness(${1 - a * 0.3})`;
      c.style.zIndex = String(20 - a);
      c.style.pointerEvents = op < 0.05 ? "none" : "auto";
    });
  };

  const startTimer = () => {
    const h = heroRef.current;
    if (!h) return;
    if (anim.current) {
      anim.current.onfinish = null;
      anim.current.cancel();
    }
    h.querySelectorAll<HTMLElement>("[data-prog]").forEach((b) => {
      b.style.transform = "scaleX(0)";
    });
    const bar = h.querySelector<HTMLElement>(`[data-prog="${index}"]`);
    if (!bar) return;
    const a = bar.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
      duration: AUTOPLAY_MS,
      fill: "forwards",
    });
    a.onfinish = () => go(index + 1);
    if (hover.current) a.pause();
    anim.current = a;
  };

  // Parallax raf loop — independent of React re-renders, mirrors the mouse
  // position (eased) onto CSS custom properties the card stage reads.
  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf: number;
    const loop = () => {
      mx.current += (tmx.current - mx.current) * 0.07;
      my.current += (tmy.current - my.current) * 0.07;
      const h = heroRef.current;
      if (h) {
        h.style.setProperty("--mx", mx.current.toFixed(4));
        h.style.setProperty("--my", my.current.toFixed(4));
        h.style.setProperty("--sy", reduced.current ? "0" : Math.min(window.scrollY, 1000).toFixed(1));
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Keyboard arrows navigate the slider, but only while the hero is roughly
  // in view and focus isn't inside a form control.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      const h = heroRef.current;
      if (!h || window.scrollY > h.offsetHeight * 0.6) return;
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  useEffect(() => {
    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    layout();
    const t = setTimeout(layout, 300);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    startTimer();
    if (!isFirstRender.current) {
      const t = textRef.current;
      t?.animate?.(
        [
          { opacity: 0, transform: "translateY(18px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)" }
      );
    }
    isFirstRender.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const cur = SERVICES[index];

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={(e) => {
        if (reduced.current || !heroRef.current) return;
        const r = heroRef.current.getBoundingClientRect();
        tmx.current = ((e.clientX - r.left) / r.width) * 2 - 1;
        tmy.current = ((e.clientY - r.top) / r.height) * 2 - 1;
      }}
      onMouseLeave={() => {
        tmx.current = 0;
        tmy.current = 0;
      }}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy text-white"
      style={{ ["--mx" as any]: 0, ["--my" as any]: 0, ["--sy" as any]: 0 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          transform:
            "translate3d(calc(var(--mx) * -14px),calc(var(--my) * -14px + var(--sy) * .35px),0)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 72% 55%,rgba(11,74,143,.9),transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-2vw] whitespace-nowrap text-center font-heading font-bold text-[27vw] leading-[.8] tracking-[-.01em] text-transparent"
        style={{
          WebkitTextStroke: "1px rgba(255,255,255,.07)",
          transform: "translate3d(calc(var(--mx) * -34px),calc(var(--sy) * .18px),0)",
        }}
      >
        DAWTECH
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] flex-1 items-center gap-8 px-5 pb-8 pt-[clamp(108px,14vh,150px)] sm:px-16 lg:grid-cols-2 lg:gap-16">
        <div style={{ transform: "translate3d(0,calc(var(--sy) * .22px),0)" }}>
          <div className="flex items-center gap-3 font-body font-semibold text-[13px] leading-none tracking-[.14em] uppercase text-orange">
            <span className="h-px w-7 bg-orange" />
            Technical Solutions You Can Trust
          </div>
          <div ref={textRef}>
            <p className="mt-7 font-body font-semibold text-sm leading-none tracking-[.1em] uppercase text-white/70">
              {pad(index + 1)} / {pad(N)} — Core service
            </p>
            <h1 className="mt-3.5 min-h-[1.9em] font-heading font-semibold text-[clamp(44px,6.2vw,90px)] leading-[.94] tracking-[.005em] uppercase text-white">
              {cur.name}
            </h1>
            <p className="mt-5.5 max-w-[52ch] font-body font-normal text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-white/80">
              {cur.desc}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button
              onClick={() => {
                setActiveService(index);
                scrollToId("services");
              }}
            >
              Explore service
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
            <Button href="#contact" variant="ghost">
              Request a quote
            </Button>
          </div>
        </div>

        <div
          ref={stageRef}
          onPointerDown={(e) => {
            dragX0.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (dragX0.current == null) return;
            const dx = e.clientX - dragX0.current;
            dragX0.current = null;
            if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
          }}
          onMouseEnter={() => {
            hover.current = true;
            anim.current?.pause();
          }}
          onMouseLeave={() => {
            hover.current = false;
            if (anim.current?.playState === "paused") anim.current.play();
          }}
          className="relative touch-pan-y select-none"
          style={{
            ["--cw" as any]: "min(360px,64vw)",
            height: "calc(var(--cw) * 1.25 + 60px)",
            perspective: "1500px",
          }}
        >
          <div
            className="absolute inset-0 [transform-style:preserve-3d]"
            style={{
              transform:
                "rotateX(calc(var(--my) * -7deg)) rotateY(calc(var(--mx) * 9deg))",
            }}
          >
            {SERVICES.map((s, k) => (
              <HeroSlideCard
                key={s.id}
                service={s}
                num={pad(k + 1)}
                active={k === index}
                onSelect={() => go(k)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] items-center gap-5 px-5 pb-8 sm:px-16">
        <div className="flex flex-none gap-2">
          <IconButton
            aria-label="Previous service"
            onClick={() => go(index - 1)}
            className="border-white/30 text-white hover:border-orange hover:text-orange"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </IconButton>
          <IconButton
            aria-label="Next service"
            onClick={() => go(index + 1)}
            className="border-white/30 text-white hover:border-orange hover:text-orange"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </IconButton>
        </div>
        <div className="flex min-w-0 flex-1 gap-4 overflow-x-auto [scrollbar-width:none]">
          {SERVICES.map((s, k) => (
            <HeroPaginationTab
              key={s.id}
              index={k}
              num={pad(k + 1)}
              short={s.short}
              active={k === index}
              onSelect={() => go(k)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
