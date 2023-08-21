export type Cents = number

export type Duration = 'month' | 'quarter' | 'annual'

export type PaymentMethod = 'card' | 'invoice' | 'bank'

export interface InvoiceItem {
  description: string
  cost: Cents
  metadata?: Record<string, string>
}

export interface Subscription {
  id: string
  periodEnd: number
  customer: string
  status: 'active' | 'trial' | 'cancelled' | 'created' | {}
  trialEnd?: number
  price: number
  paymentMethod: PaymentMethod
}

export interface Invoice {
  id: string
  amountDue: number
  amountPaid: number
  dueDate: Date
  customer: string
  items: InvoiceItem[]
}

export interface PaymentService {
  purchase(cost: Cents, orgId: string, invoiceItems: Array<InvoiceItem>): Promise<{ status: string }>
  createInvoice(cost: Cents, orgId: string, invoiceItems: Array<InvoiceItem>): Promise<{ status: string }>
  voidInvoice(invoiceId: string): Promise<{ status: string }>
  getInvoices(orgId: string): Promise<Invoice[]>
}

export interface SubscriptionService {
  subscribe(
    cost: Cents,
    orgId: string,
    invoiceItems: Array<InvoiceItem>,
    duration: Duration
  ): Promise<{ status: string }>
  cancelSubscription(subscriptionId: string): Promise<{ status: string }>
  editSubscription(subscriptionId: string, invoiceItems: Array<Partial<InvoiceItem>>): Promise<{ status: string }>
  getSubscription(subscriptionId: string): Promise<Subscription>
}
