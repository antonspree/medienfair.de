import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SolutionSection />
        <StepsSection />
        <ProcessSection />
        <AboutTeaserSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
