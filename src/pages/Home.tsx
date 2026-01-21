import Container from "../components/Container";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import Slideshow from "../components/Slideshow";
import { Link } from "react-router-dom";
import { Hammer, Shovel, Trees } from "lucide-react";
import Seo from "../components/Seo";
import serviceTomrerImage from "../assets/stilas.jpg";
import serviceGrunnarbeidImage from "../assets/excavator.jpg";
import serviceHageImage from "../assets/Hage.jpg";
import heroImage1 from "../assets/stilas.jpg";
import heroImage2 from "../assets/excavator.jpg";
import heroImage3 from "../assets/Hage.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3];

export default function Home() {
  return (
    <>
      <Seo
        title="Vest Bygg & Maskin"
        description="Din pålitelige partner for bygge- og anleggsarbeid i Bergensområdet. Vi leverer kvalitet og service du kan stole på."
      />
      {/* Hero Section */}
      <Section spacing="hero">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Text + CTA */}
            <div>
              <h1 className="heading-1">Vest Bygg & Maskin</h1>
              <p className="body-text measure mt-4">
                Din pålitelige partner for bygge- og anleggsarbeid i
                Bergensområdet. Vi leverer kvalitet og service du kan stole på.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/kontakt" className="btn-primary">
                  Kontakt oss
                </Link>
                <Link to="/tjenester" className="btn-secondary">
                  Se tjenester
                </Link>
              </div>
            </div>

            {/* Right: Slideshow with smooth fade transition */}
            <div className="media-frame">
              <Slideshow
                images={heroImages}
                intervalMs={4000}
                className="h-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section>
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="heading-2 mt-2">Våre tjenester</h2>
            </div>
            <Link to="/tjenester" className="btn-secondary">
              Se alle tjenester
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Tømrer"
              description="Oppussing, rehabilitering og tilbygg med ryddig utførelse og tydelig dialog."
              icon={Hammer}
              image={serviceTomrerImage}
              imageAlt="Tømrer tjenester"
            />
            <ServiceCard
              title="Grunnarbeid & maskin"
              description="Graving, planering og maskinoppdrag utført effektivt og sikkert."
              icon={Shovel}
              image={serviceGrunnarbeidImage}
              imageAlt="Maskin- og grunnarbeid fra Vest Bygg & Maskin"
            />
            <ServiceCard
              title="Hage & uteområder"
              description="Rydding, grunnarbeid og utbedring av uteområder – når det trengs både maskin og håndverk."
              icon={Trees}
              image={serviceHageImage}
              imageAlt="Hage- og uteområder fra Vest Bygg & Maskin"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
