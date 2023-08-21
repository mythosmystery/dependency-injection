import { Invoice, InvoiceItem, PaymentService } from '../dependencies/payment'

export class CreditService implements PaymentService {
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
