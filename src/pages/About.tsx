import Container from "../components/Container";
import Section from "../components/Section";
import PageHeader from "../components/ui/PageHeader";
import { ButtonLink } from "../components/ui/Button";
import Seo from "../components/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="Om Vest Bygg & Maskin"
        description="Vest Bygg & Maskin AS er et bygg- og maskinfirma med base i Bergen, og vi tar oppdrag i hele Vestland."
      />
      <PageHeader
        title="Om Vest Bygg & Maskin"
        subtitle=""
        className="md:py-6 lg:py-8"
      />

      <Section spacing="tight" className="-mt-4 md:-mt-6 lg:-mt-8">
        <Container>
          <div className="max-w-[var(--measure)]">
            <h2 className="heading-2">Litt om oss</h2>
            <p className="body-text mt-4">
              Vest Bygg & Maskin AS er et bygg- og maskinfirma med base i
              Bergen, og vi tar oppdrag i hele Vestland.
              <br />
              Vi leverer tjenester innen tømrer- og maskinførerfaget, og påtar
              oss jobber der det ofte trengs både maskin og håndverk for å løse
              oppgaven på en effektiv og trygg måte.
              <br />
              Vi er faglærte håndverkere med solid erfaring fra både mindre og
              mer krevende prosjekter. Enten det gjelder oppussing, grunnarbeid
              eller arbeid i uteområder, legger vi vekt på praktiske løsninger
              tilpasset kundens behov.
              <br />
              Vi liker å gjøre ting skikkelig: møte presis, holde det ryddig på
              arbeidsplassen og ha tydelig dialog underveis. Målet vårt er
              enkelt – at du skal føle deg trygg på at jobben blir gjort
              ordentlig.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="tight" className="md:-mt-6 lg:-mt-8">
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

      <Section spacing="tight" className="md:-mt-4 lg:-mt-6">
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
