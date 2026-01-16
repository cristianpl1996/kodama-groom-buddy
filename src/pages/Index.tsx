import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutolavadoSection from "@/components/AutolavadoSection";
import VideosSection from "@/components/VideosSection";
import ImagesSection from "@/components/ImagesSection";
import FAQSection from "@/components/FAQSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <Hero />
        <AutolavadoSection />
        <VideosSection />
        <ImagesSection />
        <FAQSection />
        <LocationsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
