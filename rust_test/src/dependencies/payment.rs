pub trait PaymentService {
    fn purchase(&self, amount: u32, org_id: &str) -> Result<(), String>;
    fn create_invoice(&self, amount: u32, org_id: &str) -> Result<(), String>;
}
