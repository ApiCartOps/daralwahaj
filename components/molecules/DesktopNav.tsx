import { NAV } from "@/data/content";
import { NavLink } from "@/components/atoms/NavLink";
import { Button } from "@/components/atoms/Button";

export function DesktopNav({ light }: { light: boolean }) {
  return (
    <>
      <nav className="ml-auto hidden items-center gap-7 lg:flex">
        {NAV.map((l) => (
          <NavLink key={l.href} href={l.href} light={light}>
            {l.label}
          </NavLink>
        ))}
      </nav>
      <Button href="#contact" variant="primary" className="hidden lg:inline-flex">
        Get in touch
      </Button>
    </>
  );
}
