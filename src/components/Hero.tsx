import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect Investors,
              <span className="text-accent"> Empower Startups</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              The ultimate platform where investors find profitable opportunities, 
              startups get expert guidance, and entrepreneurs master business fundamentals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Investing
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
                Launch Your Startup
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Business development and investment platform"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg">
              <p className="font-semibold">$2.5M+ Invested</p>
              <p className="text-sm opacity-90">This Month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;