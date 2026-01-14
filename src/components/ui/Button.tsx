import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

type ButtonLinkProps = {
  to: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${variantClass[variant]}${className ? ` ${className}` : ""}`;
  return <button {...props} className={classes} />;
}

export function ButtonLink({
  to,
  variant = "primary",
  className = "",
  children,
}: ButtonLinkProps) {
  const classes = `${variantClass[variant]}${className ? ` ${className}` : ""}`;
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
