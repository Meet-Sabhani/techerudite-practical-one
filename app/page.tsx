import AboutSection from "@/components/about-section";
import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/hero-section";
import OurProcessSection from "@/components/our-process";
import ServiceSection from "@/components/service-section";
import TestimonialsBlogSection from "@/components/testimonials-blog-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <OurProcessSection />
      <TestimonialsBlogSection />
      <ContactForm />
    </>
  );
}
