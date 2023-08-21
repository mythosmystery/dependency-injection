import { PaymentService } from '../dependencies/payment'
import { CreditService } from '../services/credit.service'
import { StripeService } from '../services/stripe.service'

export type PaymentType = 'credit' | 'card'

export const paymentFactory = (paymentType: PaymentType): PaymentService => {
  if (paymentType === 'credit') return new CreditService()
  if (paymentType === 'card') return new StripeService()
  throw new Error('Invalid payment type')
}
