import { Navigation } from './navigation'
import { HeroSection } from './hero-section'
import { FeaturesSection } from './features-section'
import { PricingSection } from './pricing-section'

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
    </div>
  )
}