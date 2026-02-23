import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "@/node_modules/next/image";

export const metadata = buildMetadata({
  description:
    "BIZNIS CARGO DOO – pouzdani partner u organizaciji drumskog prevoza robe u Srbiji. Brza reakcija, transparentne cene, provereni prevoznici.",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.phone1,
    contactType: "customer service",
    areaServed: "RS",
    availableLanguage: "Serbian",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Milana Savića 51a",
    addressLocality: "Novi Sad",
    postalCode: "21000",
    addressCountry: "RS",
  },
  email: CONTACT.email,
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: CONTACT.phone1,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Milana Savića 51a",
    addressLocality: "Novi Sad",
    postalCode: "21000",
    addressCountry: "RS",
  },
  description:
    "Organizacija drumskog prevoza robe u Srbiji. Brzo, sigurno i ekonomično – bez sopstvenog voznog parka.",
  areaServed: "RS",
  serviceType: "Freight Transportation",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Image src={"/17381.jpg"} width={1000} height={300} alt="biznis-cargo" className="w-full" />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
