import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { ArrowLeft, CreditCard, Lock, Check } from "lucide-react"

interface CheckoutPageProps {
  selectedPlan?: {
    name: string
    price: number
    features: string[]
  }
}

export function CheckoutPage({ selectedPlan = {
  name: "Professional",
  price: 79,
  features: ["15 AI Helpers", "10,000 interactions/month", "Priority support"]
}}: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    address: '',
    city: '',
    zipCode: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    console.log(`${field} updated:`, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Processing payment for:', selectedPlan.name, formData)
    // todo: remove mock functionality - integrate with Stripe
  }

  const handleBack = () => {
    console.log('Back to pricing clicked')
    // todo: remove mock functionality - navigate back to pricing
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="mb-4"
            data-testid="button-back-to-pricing"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pricing
          </Button>
          <h1 className="text-3xl font-bold">Complete Your Purchase</h1>
          <p className="text-muted-foreground mt-2">
            Secure checkout powered by Stripe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card className="lg:order-2 h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{selectedPlan.name} Plan</h3>
                  <p className="text-sm text-muted-foreground">Monthly subscription</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${selectedPlan.price}/month</div>
                </div>
              </div>

              <div className="space-y-2">
                {selectedPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${selectedPlan.price}.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${selectedPlan.price}.00/month</span>
                </div>
              </div>

              <Badge variant="secondary" className="w-full justify-center py-2">
                14-day free trial included
              </Badge>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card className="lg:order-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Payment Information
              </CardTitle>
              <CardDescription>
                Your payment information is secure and encrypted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    data-testid="input-email"
                    required
                  />
                </div>

                {/* Card Information */}
                <div className="space-y-4">
                  <Label>Card Information</Label>
                  <div className="space-y-3">
                    <Input
                      placeholder="1234 1234 1234 1234"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      data-testid="input-card-number"
                      required
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        data-testid="input-expiry-date"
                        required
                      />
                      <Input
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        data-testid="input-cvv"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Cardholder Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input
                    id="name"
                    placeholder="Full name on card"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    data-testid="input-cardholder-name"
                    required
                  />
                </div>

                {/* Billing Address */}
                <div className="space-y-4">
                  <Label>Billing Address</Label>
                  <Input
                    placeholder="Street address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    data-testid="input-address"
                    required
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      data-testid="input-city"
                      required
                    />
                    <Input
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      data-testid="input-zip-code"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                  data-testid="button-complete-payment"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Complete Payment - ${selectedPlan.price}/month
                </Button>

                {/* Security Note */}
                <p className="text-xs text-muted-foreground text-center">
                  Protected by 256-bit SSL encryption. Your payment information is secure.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}