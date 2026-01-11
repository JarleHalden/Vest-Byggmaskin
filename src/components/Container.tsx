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
    : "mx-auto px-6"; // px-6 = 24px
  const classes = `${containerClasses}${className ? ` ${className}` : ""}`;
  return (
    <div
      className={classes}
      style={fullWidth ? undefined : { maxWidth: "1200px" }}
    >
      {children}
    </div>
  );
}
