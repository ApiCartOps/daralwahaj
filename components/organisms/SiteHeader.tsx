"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/atoms/Logo";
import { DesktopNav } from "@/components/molecules/DesktopNav";
import { MobileMenuPanel, MobileMenuToggle } from "@/components/molecules/MobileNav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = scrolled || menuOpen;

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-[350ms]"
      style={{
        background: light ? "rgba(242,242,243,.94)" : "transparent",
        borderColor: light ? "rgba(29,31,32,.12)" : "transparent",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center gap-8 px-5 py-3.5 sm:px-16">
        <a href="#top" aria-label="DAW Tech Services home" className="flex flex-none items-center">
          <Logo inverted={!light} />
        </a>
        <DesktopNav light={light} />
        <MobileMenuToggle open={menuOpen} light={light} onToggle={() => setMenuOpen((v) => !v)} />
      </div>
      {menuOpen && <MobileMenuPanel onNavigate={() => setMenuOpen(false)} />}
    </header>
  );
}
