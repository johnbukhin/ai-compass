import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Code, 
  Lightbulb, 
  Users,
  Zap,
  Shield,
  Clock
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Content Creation Assistant",
    description: "Generate engaging blog posts, social media content, and marketing copy tailored to your brand voice."
  },
  {
    icon: BarChart3,
    title: "Data Analysis Helper",
    description: "Transform complex datasets into actionable insights with AI-powered analysis and visualization."
  },
  {
    icon: Code,
    title: "Code Review Assistant",
    description: "Get intelligent code reviews, bug detection, and optimization suggestions for your projects."
  },
  {
    icon: FileText,
    title: "Document Processor",
    description: "Summarize, analyze, and extract key information from documents, PDFs, and research papers."
  },
  {
    icon: Lightbulb,
    title: "Creative Brainstorming",
    description: "Generate innovative ideas, solve problems, and explore creative solutions for any challenge."
  },
  {
    icon: Users,
    title: "Customer Support Bot",
    description: "Provide 24/7 customer assistance with contextual responses based on your knowledge base."
  }
]

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant responses powered by the latest AI technology"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data stays protected with enterprise-grade security"
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Access your AI helpers 24/7 from anywhere in the world"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Features Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Specialized AI Helpers for Every Task
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of purpose-built AI assistants, each optimized 
            for specific workflows and industries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`card-feature-${index}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Why Choose AI Helpers Pro?
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center" data-testid={`benefit-${index}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}