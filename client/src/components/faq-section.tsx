import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqItems = [
  {
    question: "Do I need coding skills?",
    answer: "No. Our user-friendly interface requires no technical background."
  },
  {
    question: "What are AI Assistants?",
    answer: "AI Assistants are specialized GPT bots, expertly trained by AI professionals for specific business tasks. Easily delegate your tasks to these AI-powered specialists through an intuitive, user-friendly interface."
  },
  {
    question: "How can AI Assistants boost my business?",
    answer: "AI Assistants streamline routine business operations, save valuable time, and provide expert insights around the clock. They're ideal for entrepreneurs, small businesses, and professionals aiming to scale operations efficiently."
  },
  {
    question: "Are AI Helpers easy to use?",
    answer: "Yes, absolutely. If you're familiar with ChatGPT, you'll effortlessly interact with our bots. Even if you're new to AI, chatting with AI Helpers feels as natural as talking to a person."
  },
  {
    question: "How soon can I start using my bots/assistants?",
    answer: "Immediate access after purchase."
  },
  {
    question: "Can I use AI Helpers with a free ChatGPT account?",
    answer: "Yes! Our AI Assistants work perfectly with your free ChatGPT account. There's no need for a paid subscription."
  },
  {
    question: "Do I have to pay monthly fees?",
    answer: "No. There are no ongoing monthly costs. Just a one-time payment grants you lifetime access."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes. We provide a 14-day money-back guarantee. If you're not fully satisfied, simply contact our friendly support team, and we'll promptly issue a refund."
  }
]

export function FAQSection() {
  const handleGetLifetimeAccess = () => {
    console.log('GET LIFETIME ACCESS clicked')
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            FAQ (Frequently Asked Questions):
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border bg-card rounded-lg px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="font-semibold text-foreground">{item.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Unlock Lifetime Access to Your Team of 60 AI Experts
          </h2>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full text-lg"
            onClick={handleGetLifetimeAccess}
            data-testid="button-faq-cta"
          >
            GET LIFETIME ACCESS
          </Button>
        </div>
      </div>
    </section>
  )
}