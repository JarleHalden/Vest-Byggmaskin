import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/ui/Card";

export default function Contact() {
  return (
    <>
      <Section spacing="tight" className="-mt-4">
        <Container>
          <div className="max-w-[var(--measure)]">
            <h1 className="heading-1">Kontakt oss</h1>
            <p className="body-text mt-4">
              Ta kontakt for en uforpliktende befaring eller spørsmål om våre
              tjenester.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card hover className="flex flex-col gap-4">
              <p className="small-text font-semibold text-[var(--color-muted)]">
                Tømrertjenester
              </p>
              <a
                className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-5 py-3 text-lg font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                href="tel:+4745692543"
              >
                456 92 543
              </a>
            </Card>

            <Card hover className="flex flex-col gap-4">
              <p className="small-text font-semibold text-[var(--color-muted)]">
                Maskin & grunnarbeid
              </p>
              <a
                className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-5 py-3 text-lg font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                href="tel:+4794974498"
              >
                949 74 498
              </a>
            </Card>
          </div>
        </Container>
      </Section>

      <Section spacing="tight" className="-mt-2">
        <Container>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-subtle)] sm:p-8">
            <p className="small-text font-semibold text-[var(--color-muted)]">
              E-post
            </p>
            <a
              className="mt-3 inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-5 py-3 text-base font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
              href="mailto:post@vest-byggmaskin.no"
            >
              post@vest-byggmaskin.no
            </a>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
              <li>Uforpliktende befaring</li>
              <li>Rask oppfølging</li>
              <li>Vi betjener Bergen og omegn</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
