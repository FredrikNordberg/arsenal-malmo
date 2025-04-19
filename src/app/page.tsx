import About from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import MemberSection from "@/components/MemberSection";
import Partners from "@/components/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MemberSection />
      <Partners />
      <ContactSection />
    </>
  );
}
