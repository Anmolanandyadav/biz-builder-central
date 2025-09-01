import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Lightbulb, GraduationCap } from "lucide-react";
import investorImage from "@/assets/investor-dashboard.jpg";
import startupImage from "@/assets/startup-team.jpg";
import learningImage from "@/assets/business-learning.jpg";

const PathwaysSection = () => {
  const pathways = [
    {
      title: "For Investors",
      description: "Discover vetted investment opportunities tailored to your capital and risk profile.",
      icon: TrendingUp,
      image: investorImage,
      features: ["Portfolio matching", "Risk assessment", "Due diligence reports", "ROI tracking"],
      cta: "Explore Investments",
      id: "investors"
    },
    {
      title: "For Startups", 
      description: "Get expert guidance, mentorship, and resources to launch and scale your business.",
      icon: Lightbulb,
      image: startupImage,
      features: ["Business plan reviews", "Mentor matching", "Funding strategies", "Growth tactics"],
      cta: "Get Guidance",
      id: "startups"
    },
    {
      title: "Learning Center",
      description: "Master business fundamentals with comprehensive courses and real-world case studies.",
      icon: GraduationCap,
      image: learningImage,
      features: ["Video courses", "Interactive workshops", "Case studies", "Certification"],
      cta: "Start Learning",
      id: "learning"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're investing, building, or learning, we have the tools and expertise to help you succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <Card key={pathway.id} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={pathway.image} 
                    alt={pathway.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{pathway.title}</CardTitle>
                  <CardDescription className="text-base">{pathway.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pathway.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-full">
                    {pathway.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;