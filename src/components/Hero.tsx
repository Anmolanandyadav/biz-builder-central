import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Connect. Invest. <span className="text-primary">Grow.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The ultimate platform connecting investors with startups while providing comprehensive business education for everyone.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 py-3">
            Start Investing
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            Launch Your Startup
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">$50M+</div>
            <div className="text-muted-foreground">Invested</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Startups</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-muted-foreground">Learners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;