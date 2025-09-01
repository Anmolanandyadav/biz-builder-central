import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg"></div>
          <h1 className="text-xl font-bold text-foreground">BizDev Hub</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#investors" className="text-muted-foreground hover:text-foreground transition-colors">
            Investors
          </a>
          <a href="#startups" className="text-muted-foreground hover:text-foreground transition-colors">
            Startups
          </a>
          <a href="#learning" className="text-muted-foreground hover:text-foreground transition-colors">
            Learning
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;