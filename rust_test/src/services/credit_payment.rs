use crate::dependencies::payment::PaymentService;

pub struct Redis;

pub struct CreditPaymentService {
    pub redis: Redis,
}

impl CreditPaymentService {
    pub fn new() -> Self {
        Self { redis: Redis }
    }
}

impl PaymentService for CreditPaymentService {
    fn purchase(&self, amount: u32, org_id: &str) -> Result<(), String> {
        println!("Purchasing {} with Credits for {}", amount, org_id);
        Ok(())
    }

    fn create_invoice(&self, amount: u32, org_id: &str) -> Result<(), String> {
        println!(
            "Creating invoice for {} with Credits for {}",
            amount, org_id
        );
        Ok(())
    }
}
