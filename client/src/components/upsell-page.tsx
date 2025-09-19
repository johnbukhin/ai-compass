import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Check, X, Sparkles, Zap, ArrowRight } from "lucide-react"

const upsellOffers = [
  {
    id: 'premium-support',
    title: 'Premium Support Package',
    originalPrice: 49,
    discountedPrice: 29,
    description: 'Get priority support with dedicated account manager and 1-hour response time',
    features: [
      'Dedicated account manager',
      '1-hour response time',
      'Phone support included',
      'Custom onboarding session',
      'Monthly strategy calls'
    ],
    badge: 'Limited Time',
    icon: Zap
  },
  {
    id: 'ai-training',
    title: 'Custom AI Training',
    originalPrice: 199,
    discountedPrice: 99,
    description: 'Train AI helpers on your specific data and use cases for maximum effectiveness',
    features: [
      'Custom data training',
      'Industry-specific models',
      'Advanced fine-tuning',
      'Performance optimization',
      'Ongoing model updates'
    ],
    badge: '50% Off Today',
    icon: Sparkles
  }
]

export function UpsellPage() {
  const [selectedOffers, setSelectedOffers] = useState<string[]>([])

  const handleOfferToggle = (offerId: string) => {
    setSelectedOffers(prev => 
      prev.includes(offerId) 
        ? prev.filter(id => id !== offerId)
        : [...prev, offerId]
    )
    console.log('Offer toggled:', offerId)
  }

  const handleContinue = () => {
    console.log('Continue clicked with offers:', selectedOffers)
    // todo: remove mock functionality - navigate to dashboard setup
  }

  const handleSkip = () => {
    console.log('Skip upsells clicked')
    // todo: remove mock functionality - navigate to dashboard setup
  }

  const calculateTotal = () => {
    return upsellOffers
      .filter(offer => selectedOffers.includes(offer.id))
      .reduce((total, offer) => total + offer.discountedPrice, 0)
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Special Offer</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Supercharge Your AI Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take advantage of these exclusive add-ons to get the most out of your AI helpers. 
            These offers are only available during setup.
          </p>
        </div>

        {/* Upsell Offers */}
        <div className="space-y-6 mb-8">
          {upsellOffers.map((offer) => (
            <Card 
              key={offer.id}
              className={`relative transition-all duration-200 cursor-pointer border-2 ${
                selectedOffers.includes(offer.id) 
                  ? 'border-primary bg-primary/5 shadow-lg' 
                  : 'border-border hover-elevate'
              }`}
              onClick={() => handleOfferToggle(offer.id)}
              data-testid={`card-upsell-${offer.id}`}
            >
              {offer.badge && (
                <div className="absolute -top-3 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {offer.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <offer.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{offer.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {offer.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">
                        ${offer.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        ${offer.discountedPrice}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">one-time</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {offer.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className={`w-8 h-8 border-2 rounded-full flex items-center justify-center transition-colors ${
                      selectedOffers.includes(offer.id)
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedOffers.includes(offer.id) && (
                        <Check className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={handleContinue}
            className="bg-primary hover:bg-primary/90 px-8"
            data-testid="button-continue-with-offers"
          >
            {selectedOffers.length > 0 ? (
              <>
                Add Selected (${calculateTotal()})
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            ) : (
              <>
                Continue to Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            onClick={handleSkip}
            className="px-8"
            data-testid="button-skip-offers"
          >
            <X className="mr-2 w-4 h-4" />
            Skip These Offers
          </Button>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            These special pricing offers expire after setup completion
          </p>
        </div>
      </div>
    </div>
  )
}