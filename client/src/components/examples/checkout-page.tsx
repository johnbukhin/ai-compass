import { CheckoutPage } from '../checkout-page'

export default function CheckoutPageExample() {
  return (
    <CheckoutPage 
      selectedPlan={{
        name: "Professional",
        price: 79,
        features: ["15 AI Helpers", "10,000 interactions/month", "Priority support", "API access"]
      }}
    />
  )
}