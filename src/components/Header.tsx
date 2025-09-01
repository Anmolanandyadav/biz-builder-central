import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">BD</span>
          </div>
          <span className="text-xl font-bold text-foreground">BusinessDev</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#investors" className="text-muted-foreground hover:text-foreground transition-colors">
            For Investors
          </a>
          <a href="#startups" className="text-muted-foreground hover:text-foreground transition-colors">
            For Startups
          </a>
          <a href="#learning" className="text-muted-foreground hover:text-foreground transition-colors">
            Learning Center
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="premium" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;