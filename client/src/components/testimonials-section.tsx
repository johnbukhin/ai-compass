import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Marketing Director",
    content: "These AI helpers have transformed our content creation process. What used to take days now happens in hours!",
    rating: 5
  },
  {
    name: "Michael T.", 
    role: "Small Business Owner",
    content: "The ROI has been incredible. I've saved over $3,000 monthly by using these AI assistants instead of hiring freelancers.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    role: "E-commerce Manager", 
    content: "The sales bot alone has increased our conversion rate by 40%. These AI helpers are game-changers.",
    rating: 5
  },
  {
    name: "David R.",
    role: "Tech Startup Founder",
    content: "As a solo entrepreneur, having 60 AI specialists feels like having an entire team. Absolutely worth every penny!",
    rating: 5
  }
]

const commitments = [
  {
    title: "14-Day Money Back",
    subtitle: "Guarantee",
    description: "Not satisfied? Get a full refund within 14 days, no questions asked."
  },
  {
    title: "Lifetime Updates", 
    subtitle: "& Support",
    description: "Your AI helpers get smarter over time with free updates forever."
  },
  {
    title: "Works With Free",
    subtitle: "ChatGPT",
    description: "No expensive subscriptions needed. Use with your free ChatGPT account."
  }
]

export function TestimonialsSection() {
  const handleGetLifetimeAccess = () => {
    console.log('GET LIFETIME ACCESS clicked')
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Commitment Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Commitment to You
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            We stand by the quality and impact of our AI bots with:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-200" data-testid={`commitment-card-${index}`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">✓</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {commitment.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {commitment.subtitle}
                  </h4>
                  <p className="text-muted-foreground">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            See What Over 10,000 Customers Are Saying About Our AI Solutions:
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`testimonial-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full text-lg"
            onClick={handleGetLifetimeAccess}
            data-testid="button-testimonials-cta"
          >
            GET LIFETIME ACCESS
          </Button>
        </div>
      </div>
    </section>
  )
}