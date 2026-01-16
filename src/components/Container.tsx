import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export default function Container({
  children,
  className = "",
  fullWidth = false,
}: ContainerProps) {
  const containerClasses = fullWidth
    ? "w-full"
    : "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
  const classes = `${containerClasses}${className ? ` ${className}` : ""}`;
  return <div className={classes}>{children}</div>;
}
