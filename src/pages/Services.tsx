import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import { ButtonLink } from "../components/ui/Button";
import Seo from "../components/Seo";

export default function Services() {
  return (
    <>
      <Seo
        title="Tjenester | Vest Bygg & Maskin"
        description="Vi utfører oppdrag for private og næring – ta kontakt for befaring"
      />
      <PageHeader
        title="Tjenester"
        subtitle="Vi utfører oppdrag for private og næring – ta kontakt for befaring"
      />

      <Section spacing="tight" className="-mt-4">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card hover className="flex h-full flex-col gap-6">
              <div>
                <p className="eyebrow">Tømrertjenester</p>
                <h2 className="heading-2 mt-2">Tømrertjenester</h2>
                <div
                  className="mt-3 h-0.5 w-12 rounded-full bg-[var(--color-brand)]"
                  aria-hidden="true"
                />
                <p className="body-text mt-3">
                  Effektive løsninger for oppussing, tilbygg og rehabilitering.
                </p>
                <ul className="mt-4 grid list-disc list-inside grid-cols-1 gap-x-6 gap-y-1 text-sm text-[var(--color-muted)] sm:grid-cols-2">
                  <li>Oppussing</li>
                  <li>Rehabilitering</li>
                  <li>Tilbygg</li>
                  <li>Etterisolering</li>
                  <li>Vindu</li>
                  <li>Bad</li>
                </ul>
              </div>
              <div className="mt-auto">
                <p className="small-text font-semibold text-[var(--color-muted)]">
                  Ring oss
                </p>
                <a className="btn-primary mt-3" href="tel:+4745692543">
                  +47 456 92 543
                </a>
              </div>
            </Card>

            <Card hover className="flex h-full flex-col gap-6">
              <div>
                <p className="eyebrow">Maskin & grunnarbeid</p>
                <h2 className="heading-2 mt-2">Maskin & grunnarbeid</h2>
                <div
                  className="mt-3 h-0.5 w-12 rounded-full bg-[var(--color-brand)]"
                  aria-hidden="true"
                />
                <p className="body-text mt-3">
                  Grunnarbeid og maskinoppdrag med trygg og ryddig utførelse.
                </p>
                <ul className="mt-4 grid list-disc list-inside grid-cols-1 gap-x-6 gap-y-1 text-sm text-[var(--color-muted)] sm:grid-cols-2">
                  <li>Graving</li>
                  <li>Planering</li>
                  <li>Drenering</li>
                  <li>Grøfting</li>
                  <li>Muring</li>
                  <li>Brøyting</li>
                </ul>
              </div>
              <div className="mt-auto">
                <p className="small-text font-semibold text-[var(--color-muted)]">
                  Ring oss
                </p>
                <a className="btn-primary mt-3" href="tel:+4794974498">
                  +47 949 74 498
                </a>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="body-text">
                Ta kontakt for en uforpliktende befaring.
              </p>
              <div className="mt-2 flex items-center gap-3 text-sm font-semibold">
                <a
                  className="text-[var(--color-text)] hover:underline"
                  href="mailto:post@vest-byggmaskin.no"
                >
                  post@vest-byggmaskin.no
                </a>
              </div>
            </div>
            <ButtonLink to="/kontakt">Kontakt oss</ButtonLink>
          </Card>
        </Container>
      </Section>
    </>
  );
}
