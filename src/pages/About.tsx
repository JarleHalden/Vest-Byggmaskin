import Container from "../components/Container";
import Section from "../components/Section";
import PageHeader from "../components/ui/PageHeader";
import { ButtonLink } from "../components/ui/Button";
import Seo from "../components/Seo";
import tobiasPhoto from "../assets/tobias.jpg";
import oleEvenPhoto from "../assets/ole.jpg";

export default function About() {
  const employees = [
    {
      name: "Tobias Andersen",
      role: "Maskinoperatør",
      photo: tobiasPhoto,
    },
    {
      name: "Ole Even Sanden",
      role: "Tømrer",
      photo: oleEvenPhoto,
    },
  ];

  return (
    <>
      <Seo
        title="Om Vest Bygg & Maskin AS"
        description="Vest Bygg & Maskin AS er et bygg- og maskinfirma med base i Bergen, og vi tar oppdrag i hele Vestland."
      />
      <PageHeader
        title={
          <>
            Om Vest Bygg & <span className="whitespace-nowrap">Maskin AS</span>
          </>
        }
        subtitle=""
        titleClassName="lg:whitespace-nowrap"
        className="md:py-6 lg:py-8"
      />

      <Section spacing="tight" className="-mt-4 md:-mt-6 lg:-mt-8">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
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

            <div className="space-y-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-subtle)]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Teamet vårt
                </p>
                <p className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                  Menneskene bak prosjektene
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Folkene som møter opp på byggeplassen og tar ansvar hele veien.
                </p>
              </div>
              <div className="space-y-5">
                {employees.map((employee) => (
                  <div
                    key={employee.name}
                    className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
                  >
                    <div className="aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={employee.photo}
                        alt={employee.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[var(--color-text)]">
                        {employee.name}
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {employee.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
