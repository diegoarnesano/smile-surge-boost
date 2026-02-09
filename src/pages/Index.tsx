import { useEffect } from "react";
import { studioConfig } from "@/lib/studioConfig";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import BookingForm from "@/components/BookingForm";
import ContactMap from "@/components/ContactMap";
import WhatsAppButton from "@/components/AIWidget";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = `${studioConfig.NOME_STUDIO} | Dentista a ${studioConfig.CITTA}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content",
        `Studio dentistico a ${studioConfig.CITTA}. ${studioConfig.RATING} stelle su Google con ${studioConfig.NUM_RECENSIONI} recensioni. Prenota la tua visita.`
      );
    }
  }, []);

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <BookingForm />
      <ContactMap />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
