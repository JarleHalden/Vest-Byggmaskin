import Container from "../components/Container";
import Section from "../components/Section";
import PageHeader from "../components/ui/PageHeader";
import { ButtonLink } from "../components/ui/Button";

export default function About() {
  return (
    <>
      <PageHeader
        title="Om Vest Bygg & Maskin"
        subtitle="Familiebedrift med fokus på kvalitet, ryddighet og god dialog."
      />

      <Section spacing="tight" className="-mt-4">
        <Container>
          <div className="max-w-[var(--measure)]">
            <h2 className="heading-2">Litt om oss</h2>
            <p className="body-text mt-4">
              Vest Bygg & Maskin AS er en familiebedrift med bred erfaring innen
              tømrer- og maskinførerfaget. Vi holder til i Bergen og omegn.
              <br />
              Vi liker å gjøre ting skikkelig: møte presis, holde det ryddig på
              arbeidsplassen og ha tydelig dialog underveis.
              <br />
              Målet vårt er enkelt – at du skal føle deg trygg fra befaring til
              ferdig jobb.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <div className="max-w-[var(--measure)]">
            <h2 className="heading-2">Slik jobber vi</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--color-text)]">
              <li>Uforpliktende befaring og tydelig avklaring av behov</li>
              <li>Praktiske forslag og realistisk plan</li>
              <li>Ryddig gjennomføring og tett dialog underveis</li>
              <li>Levering som avtalt</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <div className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-subtle)] sm:flex-row sm:items-center sm:justify-between">
            <h2 className="heading-2">Trenger du hjelp med et prosjekt?</h2>
            <div>
              <ButtonLink to="/kontakt">Kontakt oss for befaring</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
