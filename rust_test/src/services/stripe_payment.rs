use crate::dependencies::payment::PaymentService;

pub struct Stripe;

pub struct StripePaymentService {
    pub client: Stripe,
}

impl StripePaymentService {
    pub fn new() -> Self {
        StripePaymentService { client: Stripe }
    }
}

impl PaymentService for StripePaymentService {
    fn purchase(&self, amount: u32, org_id: &str) -> Result<(), String> {
        println!("Purchasing {} with Stripe for {}", amount, org_id);
        Ok(())
    }

    fn create_invoice(&self, amount: u32, org_id: &str) -> Result<(), String> {
        println!("Creating invoice for {} with Stripe for {}", amount, org_id);
        Ok(())
    }
}
