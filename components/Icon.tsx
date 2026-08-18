import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

type IconName = keyof typeof Icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const LucideIcon = Icons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
