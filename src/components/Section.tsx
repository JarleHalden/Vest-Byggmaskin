import type { ReactNode } from "react";

type SectionSpacing = "default" | "tight" | "hero";

type SectionProps = {
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
};

const spacingMap: Record<SectionSpacing, string> = {
  default: "py-12 lg:py-16", // 48px -> 64px
  tight: "py-8 lg:py-12", // 32px -> 48px
  hero: "py-16 lg:py-24", // 64px -> 96px
};

export default function Section({
  children,
  className,
  spacing = "default",
}: SectionProps) {
  const baseSpacing = spacingMap[spacing];
  const classes = `${baseSpacing}${className ? ` ${className}` : ""}`;
  return <section className={classes}>{children}</section>;
}
