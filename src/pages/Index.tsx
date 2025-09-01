import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PathwaysSection from "@/components/PathwaysSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PathwaysSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
