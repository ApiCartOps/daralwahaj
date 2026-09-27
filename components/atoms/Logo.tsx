import Image from "next/image";

export function Logo({ inverted, className }: { inverted?: boolean; className?: string }) {
  return (
    <Image
      src="/assets/logo-main.png"
      alt="DAW Tech Services"
      width={160}
      height={44}
      priority
      className={["h-[clamp(34px,4vw,44px)] w-auto", inverted ? "invert" : "", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
