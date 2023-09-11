import { Duration, InvoiceItem } from './dependencies/payment'
import { PaymentType, paymentFactory } from './factories/payment.factory'
import { schedulerFactory } from './factories/scheduler.factory'
import { subscriptionFactory } from './factories/subscription.factory'

const chargeToPaymentMethod = async (
  cost: number,
  orgId: string,
  invoiceItems: InvoiceItem[],
  purchaseType: 'fortify' | 'engage' | 'credit-add'
) => {
  const { purchase } = paymentFactory(
    purchaseType === 'credit-add' ? 'card' : 'credit'
  )

  //do stuff

  await purchase(cost, orgId, invoiceItems)

  //do other stuff
}

type Region = {}

const createSubscription = async (
  orgId: string,
  region: Region,
  duration: Duration
) => {
  const { subscribe } = subscriptionFactory(orgId)

  const price = calculatePrice(region)

  await subscribe(price, orgId, convertRegionToInvoice(region), duration)

  // do stuff
}

const calculatePrice = (region: Region) => 200_00
const convertRegionToInvoice = (region: Region): InvoiceItem[] => {
  return [{ cost: 200_00, description: 'State - OK' }]
}

const getInvoices = async (orgId: string, paymentType: PaymentType) => {
  const { getInvoices } = paymentFactory(paymentType)

  const invoices = await getInvoices(orgId)

  return invoices
}

const { schedule } = schedulerFactory()

const job = schedule('* * * * * *', () => {
  console.log('hello')
})
