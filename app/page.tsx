import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import OurProcessSection from "@/components/our-process";
import ServiceSection from "@/components/service-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <OurProcessSection />
    </>
  );
}
