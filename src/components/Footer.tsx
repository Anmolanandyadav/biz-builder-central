import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">BD</span>
              </div>
              <span className="text-xl font-bold">BusinessDev</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Connecting investors with opportunities, empowering startups with guidance, 
              and providing world-class business education.
            </p>
            <div className="flex space-x-4">
              <Button variant="accent" size="sm">
                Start Today
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">For Investors</a></li>
              <li><a href="#" className="hover:text-background transition-colors">For Startups</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Learning Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 BusinessDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;