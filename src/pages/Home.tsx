import Container from "../components/Container";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import Slideshow from "../components/Slideshow";
import { Hammer, Shovel, Wrench } from "lucide-react";

// Placeholder images - replace these URLs with your actual images when ready
// To use your own images, uncomment the imports below and comment out the placeholder URLs
const heroImages = [
  "https://picsum.photos/1200/900?random=1",
  "https://picsum.photos/1200/900?random=2",
  "https://picsum.photos/1200/900?random=3",
];

// When you add your own images, replace the above with:
// import heroImage1 from "../assets/hero-image-1.jpg";
// import heroImage2 from "../assets/hero-image-2.jpg";
// import heroImage3 from "../assets/hero-image-3.jpg";
// const heroImages = [heroImage1, heroImage2, heroImage3];

// Service card images - placeholder URLs
const serviceTomrerImage = "https://picsum.photos/800/600?random=10";
const serviceGrunnarbeidImage = "https://picsum.photos/800/600?random=11";
const serviceDriftImage = "https://picsum.photos/800/600?random=12";

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
            <div className="space-y-6">
              <h1
                className="font-bold"
                style={{
                  fontSize: "40px",
                  lineHeight: "48px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Vest Byggmaskin
              </h1>
              <p
                className="max-w-lg"
                style={{
                  fontSize: "16px",
                  lineHeight: "26px",
                  fontWeight: 400,
                  color: "#0F172A",
                }}
              >
                Din pålitelige partner for bygge- og anleggsarbeid. Vi leverer
                kvalitet og service du kan stole på.
              </p>
              <button
                className="rounded-lg transition-colors"
                style={{
                  backgroundColor: "#FEAB24",
                  color: "#0F172A",
                  padding: "14px 24px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E89A1F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FEAB24";
                }}
              >
                Kontakt oss
              </button>
            </div>

            {/* Right: Slideshow with smooth fade transition */}
            <div
              className="rounded-lg overflow-hidden"
              style={{
                backgroundColor: "#E0E0E0",
                borderRadius: "8px",
                aspectRatio: "4/3",
                width: "100%",
              }}
            >
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
          <h2
            className="mb-12 font-semibold"
            style={{
              fontSize: "28px",
              lineHeight: "36px",
              fontWeight: 600,
              color: "#0F172A",
            }}
          >
            Våre tjenester
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Tømrer"
              description="Oppussing, rehabilitering, tilbygg, etterisolering, vindu og bad. Praktiske løsninger, ryddig arbeid og tett dialog hele veien."
              icon={Hammer}
              image={serviceTomrerImage}
              imageAlt="Tømrer tjenester"
            />
            <ServiceCard
              title="Grunnarbeid & maskin"
              description="Oppussing, rehabilitering, tilbygg, etterisolering, vindu og bad. Praktiske løsninger, ryddig arbeid og tett dialog hele veien."
              icon={Shovel}
              image={serviceGrunnarbeidImage}
              imageAlt="Grunnarbeid og maskin tjenester"
            />
            <ServiceCard
              title="Drift & Vedlikehold"
              description="Brøyting og utvendig vedlikehold for private og næring. Pålitelig hjelp når du trenger det, gjennom hele året."
              icon={Wrench}
              image={serviceDriftImage}
              imageAlt="Drift og vedlikehold tjenester"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
