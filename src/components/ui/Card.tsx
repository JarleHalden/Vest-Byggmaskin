import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = false }: CardProps) {
  const base =
    "rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-subtle)]";
  const hoverClasses = hover
    ? "transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
    : "";
  const classes = `${base}${hoverClasses ? ` ${hoverClasses}` : ""}${
    className ? ` ${className}` : ""
  }`;

  return <div className={classes}>{children}</div>;
}
