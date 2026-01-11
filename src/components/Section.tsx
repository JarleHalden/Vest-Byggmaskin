import type { ReactNode } from "react";

type SectionSpacing = "default" | "tight" | "hero";

type SectionProps = {
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
};

const spacingMap: Record<SectionSpacing, string> = {
  default: "py-12 lg:py-16", // py-12 = 48px, lg:py-16 = 64px (using 2xl and 3xl spacing)
  tight: "py-8 lg:py-12", // py-8 = 32px (xl), py-12 = 48px (2xl)
  hero: "py-16 lg:py-24", // py-16 = 64px (3xl), py-24 = 96px (custom for hero)
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
