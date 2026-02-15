import { buildMetadata } from "@/lib/metadata";
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
  title: "Početna",
  description:
    "BIZNIS CARGO DOO – pouzdani partner u organizaciji drumskog prevoza robe u Srbiji. Brza reakcija, transparentne cene, provereni prevoznici.",
});

export default function HomePage() {
  return (
    <>
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
