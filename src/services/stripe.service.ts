import {
  Duration,
  Invoice,
  InvoiceItem,
  PaymentService,
  Subscription,
  SubscriptionService
} from '../dependencies/payment'

export class StripeService implements PaymentService {
  purchase(cost: number, orgId: string, invoiceItems: InvoiceItem[]): Promise<{ status: string }> {
    return Promise.resolve({ status: 'asdf' })
  }

  createInvoice(cost: number, orgId: string, invoiceItems: InvoiceItem[]): Promise<{ status: string }> {
    return Promise.resolve({ status: 'asdf' })
  }

  voidInvoice(invoiceId: string): Promise<{ status: string }> {
    return Promise.resolve({ status: 'asdf' })
  }

  getInvoices(orgId: string): Promise<Invoice[]> {
    return Promise.resolve<Invoice[]>([
      { id: 'asdf', customer: 'asdf', amountDue: 0, amountPaid: 1000, dueDate: new Date(), items: [] }
    ])
  }
}

export class StripeSubscriptionService implements SubscriptionService {
  subscribe(cost: number, orgId: string, invoiceItems: InvoiceItem[], duration: Duration): Promise<{ status: string }> {
    return Promise.resolve({ status: 'asdf' })
  }

  cancelSubscription(subscriptionId: string): Promise<{ status: string }> {
    return Promise.resolve({ status: 'asdf' })
  }

  editSubscription(subscriptionId: string, invoiceItems: Partial<InvoiceItem>[]): Promise<{ status: string }> {
    return Promise.resolve({ status: 'asdf' })
  }

  getSubscription(subscriptionId: string): Promise<Subscription> {
    return Promise.resolve({
      id: 'asdf',
      customer: 'asdf',
      paymentMethod: 'card',
      periodEnd: 123456789,
      price: 50000,
      status: 'active'
    })
  }
}
