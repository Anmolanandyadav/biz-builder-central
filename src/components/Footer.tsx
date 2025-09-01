import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-scale-in">
            <div className="flex items-center space-x-2 mb-4 hover-scale">
              <div className="w-8 h-8 bg-primary rounded-lg transition-transform duration-300 hover:rotate-12"></div>
              <h3 className="text-lg font-bold text-foreground">BizDev Hub</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Connecting investors, startups, and learners in one powerful platform.
            </p>
            <Button variant="outline" size="sm" className="hover-scale">
              Contact Us
            </Button>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="font-semibold mb-4 text-foreground">For Investors</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Investment Opportunities</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Portfolio Management</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Risk Assessment</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Market Insights</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms]">
            <h4 className="font-semibold mb-4 text-foreground">For Startups</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Business Planning</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Funding Support</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Mentorship</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Legal Resources</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:600ms]">
            <h4 className="font-semibold mb-4 text-foreground">Learning</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Business Courses</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Certifications</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Workshops</a></li>
              <li><a href="#" className="story-link hover:text-foreground transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 BizDev Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;