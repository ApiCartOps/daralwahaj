import { AboutSection } from "@/components/organisms/AboutSection";
import { ApproachSection } from "@/components/organisms/ApproachSection";
import { ClientsSection } from "@/components/organisms/ClientsSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { FutureDirectionSection } from "@/components/organisms/FutureDirectionSection";
import { HeroSlider } from "@/components/organisms/HeroSlider";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { WhyUsSection } from "@/components/organisms/WhyUsSection";
import { ActiveServiceProvider } from "@/hooks/useActiveService";

export function HomeTemplate() {
  return (
    <ActiveServiceProvider>
      <SiteHeader />
      <main className="bg-paper text-ink">
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ApproachSection />
        <ClientsSection />
        <FutureDirectionSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </ActiveServiceProvider>
  );
}
