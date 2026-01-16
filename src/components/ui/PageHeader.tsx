import Container from "../Container";
import Section from "../Section";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export default function PageHeader({
  title,
  subtitle,
  className = "",
}: PageHeaderProps) {
  return (
    <Section spacing="tight" className={className}>
      <Container>
        <div className="max-w-[var(--measure)]">
          <h1 className="heading-1">{title}</h1>
          <p className="body-text mt-4">{subtitle}</p>
        </div>
      </Container>
    </Section>
  );
}
