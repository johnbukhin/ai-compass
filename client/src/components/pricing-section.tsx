import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Crown, Rocket } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for individuals getting started with AI assistance",
    icon: Zap,
    popular: false,
    features: [
      "5 AI Helpers included",
      "1,000 AI interactions/month",
      "Basic customization",
      "Email support",
      "Knowledge base access"
    ]
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for professionals and small teams",
    icon: Crown,
    popular: true,
    features: [
      "15 AI Helpers included",
      "10,000 AI interactions/month",
      "Advanced customization",
      "Priority support",
      "Custom training data",
      "API access",
      "Team collaboration"
    ]
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For organizations requiring maximum capability",
    icon: Rocket,
    popular: false,
    features: [
      "Unlimited AI Helpers",
      "Unlimited interactions",
      "White-label options",
      "Dedicated support",
      "Custom integrations",
      "Advanced analytics",
      "SLA guarantee",
      "On-premise deployment"
    ]
  }
]

export function PricingSection() {
  const handleSelectPlan = (planName: string, price: number) => {
    console.log(`Selected ${planName} plan at $${price}/month`)
    // todo: remove mock functionality - navigate to checkout
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial 
            with full access to features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover-elevate transition-all duration-200 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleSelectPlan(plan.name, plan.price)}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}