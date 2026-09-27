type PathProps = { d: string } | Record<string, string | number>;
type IconDef = ["path" | "rect" | "circle", PathProps];

const ICONS = {
  server: [
    ["rect", { x: 2, y: 2, width: 20, height: 8, rx: 2 }],
    ["rect", { x: 2, y: 14, width: 20, height: 8, rx: 2 }],
    ["path", { d: "M6 6h.01" }],
    ["path", { d: "M6 18h.01" }],
  ],
  cctv: [
    [
      "path",
      {
        d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",
      },
    ],
    [
      "path",
      {
        d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",
      },
    ],
    ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }],
    ["path", { d: "M2 21v-4" }],
    ["path", { d: "M7 9h.01" }],
  ],
  network: [
    ["rect", { x: 16, y: 16, width: 6, height: 6, rx: 1 }],
    ["rect", { x: 2, y: 16, width: 6, height: 6, rx: 1 }],
    ["rect", { x: 9, y: 2, width: 6, height: 6, rx: 1 }],
    ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }],
    ["path", { d: "M12 12V8" }],
  ],
  fan: [
    [
      "path",
      {
        d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
      },
    ],
    ["path", { d: "M12 12v.01" }],
  ],
  zap: [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      },
    ],
  ],
  sparkles: [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      },
    ],
    ["path", { d: "M20 3v4" }],
    ["path", { d: "M22 5h-4" }],
    ["path", { d: "M4 17v2" }],
    ["path", { d: "M5 18H3" }],
  ],
} satisfies Record<string, IconDef[]>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 24,
  strokeWidth = 1.5,
  className,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "block" }}
      aria-hidden="true"
    >
      {ICONS[name].map(([tag, props], k) => {
        const Tag = tag as any;
        return <Tag key={k} {...props} />;
      })}
    </svg>
  );
}
