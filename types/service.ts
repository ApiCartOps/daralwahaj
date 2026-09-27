import type { IconName } from "@/lib/icons";

export interface Service {
  id: string;
  icon: IconName;
  name: string;
  short: string;
  photo: string;
  desc: string;
  items: string[];
}
