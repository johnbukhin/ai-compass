import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import heroBackground from "@assets/generated_images/AI_technology_hero_background_4f721008.png"

export function HeroSection() {
  const handleGetStarted = () => {
    console.log('Get Started clicked')
    // todo: remove mock functionality - navigate to pricing
  }

  const handleLearnMore = () => {
    console.log('Learn More clicked')
    // todo: remove mock functionality - scroll to features
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Productivity</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Custom AI Helpers for
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              {" "}Every Need
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access specialized AI assistants tailored to your workflow. From content creation to data analysis, 
            boost your productivity with GPT-powered helpers that understand your specific requirements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 border-primary-border px-8 py-3"
              onClick={handleGetStarted}
              data-testid="button-get-started"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-3"
              onClick={handleLearnMore}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-gray-300">AI Helpers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}