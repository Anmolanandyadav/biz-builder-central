import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PathwaysSection = () => {
  const pathways = [
    {
      title: "For Investors",
      description: "Discover investment opportunities tailored to your capital and risk preferences.",
      features: [
        "Capital-based recommendations",
        "Risk assessment tools",
        "Portfolio tracking",
        "Due diligence support"
      ],
      icon: "💰",
      buttonText: "Start Investing"
    },
    {
      title: "For Startups",
      description: "Get expert guidance and resources to launch and scale your business.",
      features: [
        "Business plan templates",
        "Mentor matching",
        "Funding roadmap",
        "Legal & compliance"
      ],
      icon: "🚀",
      buttonText: "Launch Startup"
    },
    {
      title: "Business Learning",
      description: "Master business fundamentals with our comprehensive education platform.",
      features: [
        "Interactive courses",
        "Real-world case studies",
        "Certification programs",
        "Expert workshops"
      ],
      icon: "📚",
      buttonText: "Start Learning"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Choose Your Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to invest, start a business, or learn, we have the right tools for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{pathway.icon}</div>
                <CardTitle className="text-xl">{pathway.title}</CardTitle>
                <CardDescription className="text-base">
                  {pathway.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pathway.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  {pathway.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;