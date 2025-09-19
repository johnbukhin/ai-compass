import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    id: "24-bots",
    title: "24 AI Bots",
    originalPrice: 199,
    currentPrice: 37,
    discount: "-82%",
    isPopular: false,
    features: [
      "24 ready-to-use Bots",
      "5 Marketing/SMM Bots", 
      "3 Sales Bots",
      "2 Finance Bots",
      "3 Productivity Bots",
      "3 Engineering Bots", 
      "2 Automation Bots",
      "1 Customer Support Bot",
      "1 Human Resources Bot",
      "1 Tech Bot",
      "1 Legal Bot",
      "1 Design Bot",
      "1 Lifestyle Bot",
      "Budget Tracking Bot",
      "Lead Generation Bot",
      "Calorie Tracker Bot",
      "Midjourney Prompt Bot"
    ]
  },
  {
    id: "60-bots",
    title: "60 AI Bots", 
    originalPrice: 449,
    currentPrice: 57,
    discount: "-87%",
    isPopular: true,
    badge: "Best Value",
    features: [
      "60 ready-to-use Bots",
      "10 Marketing/SMM Bots",
      "7 Sales Bots", 
      "5 Finance Bots",
      "9 Productivity Bots",
      "5 Engineering Bots",
      "5 Automation Bots",
      "3 Customer Support Bots",
      "3 Human Resources",
      "3 Tech Bots",
      "2 Legal Bots",
      "2 Design Bots",
      "6 Lifestyle Bots",
      "",
      "PDF Processing Bot",
      "AI Prompt Engineering Bot", 
      "Pricing Strategy Bot",
      "Brand Messaging Bot",
      "Social Strategy Bot",
      "Sales Stories Bot",
      "Market Trend Insights Bot",
      "Data Science Bot",
      "Cybersecurity Bot",
      "Fitness Coach Bot",
      "Emotion Assistant Bot",
      "Personal Stylist Bot"
    ]
  }
]

export function PricingSectionNew() {
  const handleSelectPlan = (planId: string, price: number) => {
    console.log(`Selected ${planId} plan at $${price}`)
    // Navigate to checkout
  }

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Pick Your AI Helpers Bundle!
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative border-border bg-card hover-elevate transition-all duration-200 ${
                plan.isPopular ? 'ring-2 ring-primary' : ''
              }`}
              data-testid={`pricing-card-${plan.id}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 font-bold">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.title}
                </CardTitle>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-muted-foreground line-through">
                      ${plan.originalPrice}
                    </span>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      {plan.discount}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Limited Offer
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    ${plan.currentPrice}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {plan.features.map((feature, index) => (
                    feature ? (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ) : (
                      <div key={index} className="h-2"></div>
                    )
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 text-lg"
                  onClick={() => handleSelectPlan(plan.id, plan.currentPrice)}
                  data-testid={`button-select-${plan.id}`}
                >
                  Get This Bundle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}