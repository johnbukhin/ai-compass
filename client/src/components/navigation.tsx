import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Brain, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogin = () => {
    console.log('Login clicked')
    // todo: remove mock functionality - navigate to login
  }

  const handleGetStarted = () => {
    console.log('Get Started clicked')
    // todo: remove mock functionality - navigate to pricing
  }

  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to ${sectionId}`)
    // todo: remove mock functionality - implement smooth scroll
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold" data-testid="text-logo">
              AI Helpers Pro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-about"
            >
              About
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              onClick={handleLogin}
              data-testid="button-login"
            >
              Login
            </Button>
            <Button 
              onClick={handleGetStarted}
              data-testid="button-nav-get-started"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="link-mobile-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="link-mobile-pricing"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="link-mobile-about"
              >
                About
              </button>
              <div className="px-4 pt-2 space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={handleLogin}
                  data-testid="button-mobile-login"
                >
                  Login
                </Button>
                <Button 
                  className="w-full"
                  onClick={handleGetStarted}
                  data-testid="button-mobile-get-started"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}