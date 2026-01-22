import { ReactNode } from "react";
import Container from "../Container";
import Section from "../Section";

type PageHeaderProps = {
  title: ReactNode;
  subtitle: string;
  className?: string;
  titleClassName?: string;
};

export default function PageHeader({
  title,
  subtitle,
  className = "",
  titleClassName = "",
}: PageHeaderProps) {
  return (
    <Section spacing="tight" className={className}>
      <Container>
        <div className="max-w-[var(--measure)]">
          <h1 className={`heading-1 ${titleClassName}`.trim()}>{title}</h1>
          <p className="body-text mt-4">{subtitle}</p>
        </div>
      </Container>
    </Section>
  );
}
