import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, MessageCircle, BookOpen } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Operates in 150+ languages fluently"
  },
  {
    icon: MessageCircle, 
    title: "Human-like chat",
    description: "Talk to your AI Helpers just like teammates"
  },
  {
    icon: BookOpen,
    title: "Expertly trained",
    description: "Built on insights from 10,000+ books, courses, and industry reports"
  }
]

const comparisonItems = [
  {
    title: "Deeper Expertise",
    robot: "Trained on 10,000+ resources",
    human: "Years of ramp‑up time"
  },
  {
    title: "Lightning Efficiency", 
    robot: "Instant answers, zero downtime",
    human: "8‑hour workday, coffee breaks"
  },
  {
    title: "Superior Accuracy",
    robot: "Powered by Next-Gen AI", 
    human: "Human inconsistency"
  },
  {
    title: "Lower Cost",
    robot: "One‑time fee, lifetime access",
    human: "Monthly salary, overhead"
  }
]

export function FeaturesSectionNew() {
  const handleGetLifetimeAccess = () => {
    console.log('GET LIFETIME ACCESS clicked')
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Growth Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            <strong className="text-primary">From 24 to 60 AI Helpers:</strong> Now Smarter, Stronger, and Ready to Scale with You
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
            <p>• When we first launched our 24 AI Bots just a few months ago, 700+ business owners jumped in and made them part of their daily workflow.</p>
            <p>• <strong className="text-foreground">Now, we've levelled up – introducing a powerful squad of 60 AI Helpers, ready to supercharge your business.</strong></p>
            <p>• With this expanded AI team, you get the output of an entire company – even if you're building solo.</p>
          </div>
          <div className="mt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full text-lg"
              onClick={handleGetLifetimeAccess}
              data-testid="button-features-cta"
            >
              GET LIFETIME ACCESS
            </Button>
          </div>
        </div>

        {/* Team Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Meet the Team Behind Your AI Powerhouse
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            From <strong className="text-foreground">content creators</strong> and <strong className="text-foreground">marketing strategists</strong> to <strong className="text-foreground">HR partners</strong>, <strong className="text-foreground">sales closers</strong>, and <strong className="text-foreground">finance pros</strong> – our <strong className="text-foreground">AI bots</strong> are grouped into specialized teams, each built to handle a key area of your business:
          </p>
          <p className="text-lg text-muted-foreground font-semibold">...and 36 more!</p>
        </div>

        {/* Superpowers Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Activate AI Superpowers in Your Business
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your idea, their mission — executed in seconds!
            </h3>
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Tireless, lightning-fast, and drama-free.</strong>
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              With your <strong className="text-foreground">60 AI Helpers</strong>, every corner of your business is covered — from fresh ideas to flawless execution.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-elevate transition-all duration-200" data-testid={`feature-card-${index}`}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Perfect AI Specialist */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Perfect AI specialist for every job:
          </h2>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full text-lg"
            onClick={handleGetLifetimeAccess}
            data-testid="button-specialist-cta"
          >
            GET LIFETIME ACCESS
          </Button>
        </div>

        {/* AI vs Human Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Our AI-powered Workers🤖 Outperform Humans🧑:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {comparisonItems.map((item, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`comparison-card-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <span className="text-2xl">🤖</span>
                    <span className="text-foreground">{item.robot}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <span className="text-2xl">🧑</span>
                    <span className="text-muted-foreground">{item.human}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            What You Get That Others Don't:
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg">
            <p className="text-muted-foreground">• <strong className="text-foreground">Lifetime Access.</strong> Buy once – your AI Helpers are yours forever.</p>
            <p className="text-muted-foreground">• <strong className="text-foreground">Zero Subscriptions.</strong> No monthly fees draining your budget.</p>
            <p className="text-muted-foreground">• <strong className="text-foreground">Works with Free ChatGPT.</strong> No Plus plan or extras required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}