import Container from "../components/Container";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import Slideshow from "../components/Slideshow";
import { Link } from "react-router-dom";
import { Hammer, Shovel, Trees } from "lucide-react";

// Placeholder images - replace these URLs with your actual images when ready
// To use your own images, uncomment the imports below and comment out the placeholder URLs
const heroImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
];

// When you add your own images, replace the above with:
// import heroImage1 from "../assets/hero-image-1.jpg";
// import heroImage2 from "../assets/hero-image-2.jpg";
// import heroImage3 from "../assets/hero-image-3.jpg";
// const heroImages = [heroImage1, heroImage2, heroImage3];

// Service card images - placeholder URLs
const serviceTomrerImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=960&q=80";
const serviceGrunnarbeidImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=960&q=80";
const serviceDriftImage =
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=960&q=80";

// When you add your own images, replace the above with:
// import serviceTomrerImage from "../assets/service-tomrer.jpg";
// import serviceGrunnarbeidImage from "../assets/service-grunnarbeid.jpg";
// import serviceDriftImage from "../assets/service-drift.jpg";

export default function Home() {
  return (
    <>
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
              imageAlt="Grunnarbeid og maskin tjenester"
            />
            <ServiceCard
              title="Hage & uteområder"
              description="Rydding, grunnarbeid og utbedring av uteområder – når det trengs både maskin og håndverk."
              icon={Trees}
              image={serviceDriftImage}
              imageAlt="Drift og vedlikehold tjenester"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
