import Container from "../Container";
import Section from "../Section";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Section spacing="tight">
      <Container>
        <div className="max-w-[var(--measure)]">
          <h1 className="heading-1">{title}</h1>
          <p className="body-text mt-4">{subtitle}</p>
        </div>
      </Container>
    </Section>
  );
}
