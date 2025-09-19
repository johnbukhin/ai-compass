import { Button } from "@/components/ui/button"
import robotArmyImage from "@assets/generated_images/Robot_army_hero_image_f30cdaf9.png"

export function HeroSectionNew() {
  const handleGetLifetimeAccess = () => {
    console.log('GET LIFETIME ACCESS clicked')
    // Navigate to pricing section or checkout
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20">
      {/* Top CTA Button */}
      <div className="mb-8">
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-full text-base"
          onClick={handleGetLifetimeAccess}
          data-testid="button-top-cta"
        >
          GET LIFETIME ACCESS
        </Button>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
          Use This Army of{" "}
          <span className="text-primary">60 AI-Powered Helpers</span>{" "}
          for Your Business to Automate 90% of Your Tasks and Save $1,000s Monthly!
        </h1>
      </div>

      {/* Hero Image */}
      <div className="mb-12">
        <img 
          src={robotArmyImage} 
          alt="Army of 60 AI Helpers - Colorful robots around computer monitor"
          className="w-full max-w-4xl h-auto rounded-lg"
          data-testid="hero-image"
        />
      </div>

      {/* Sub-headline */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-lg md:text-xl text-muted-foreground mb-2">
          Imagine having <strong className="text-foreground">an army of 60 bot assistants</strong>, ready to tackle any business task <strong className="text-foreground">24/7</strong>!
        </p>
        <p className="text-lg md:text-xl text-foreground font-semibold">
          That's your <strong className="text-primary">AI revolutionary workforce</strong>.
        </p>
      </div>

      {/* Bottom CTA Button */}
      <div className="mb-12">
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full text-lg"
          onClick={handleGetLifetimeAccess}
          data-testid="button-bottom-cta"
        >
          GET LIFETIME ACCESS
        </Button>
      </div>

      {/* Features List */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          The Smartest AI Assistants You'll Ever Hire:
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
            <span className="text-muted-foreground"><strong className="text-foreground">60 fields of expertise</strong> – your own AI army</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
            <span className="text-muted-foreground"><strong className="text-foreground">Lifetime access</strong> – no fees, no subscriptions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
            <span className="text-muted-foreground"><strong className="text-foreground">One-time payment</strong> – unlimited usage, forever</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
            <span className="text-muted-foreground"><strong className="text-foreground">Free‑tier friendly</strong> – works on basic free ChatGPT</span>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-12">
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full text-lg"
          onClick={handleGetLifetimeAccess}
          data-testid="button-final-cta"
        >
          GET YOUR OFFER
        </Button>
      </div>
    </section>
  )
}