import { SubscriptionService } from '../dependencies/payment'
import { StripeSubscriptionService } from '../services/stripe.service'

export const subscriptionFactory = (_orgId: string): SubscriptionService => {
  return new StripeSubscriptionService()
}
