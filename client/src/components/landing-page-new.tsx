import { HeroSectionNew } from './hero-section-new'
import { FeaturesSectionNew } from './features-section-new'
import { PricingSectionNew } from './pricing-section-new'
import { TestimonialsSection } from './testimonials-section'
import { FAQSection } from './faq-section'

export function LandingPageNew() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSectionNew />
        <FeaturesSectionNew />
        <TestimonialsSection />
        <PricingSectionNew />
        <FAQSection />
      </main>
    </div>
  )
}