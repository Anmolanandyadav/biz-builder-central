import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 hover-scale">
          <div className="w-8 h-8 bg-primary rounded-lg transition-all duration-300 hover:rotate-12"></div>
          <h1 className="text-xl font-bold text-foreground">BizDev Hub</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#investors" className="story-link text-muted-foreground hover:text-foreground transition-colors">
            Investors
          </a>
          <a href="#startups" className="story-link text-muted-foreground hover:text-foreground transition-colors">
            Startups
          </a>
          <a href="#learning" className="story-link text-muted-foreground hover:text-foreground transition-colors">
            Learning
          </a>
          <a href="#about" className="story-link text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="hover-scale">Sign In</Button>
          <Button className="hover-scale">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;