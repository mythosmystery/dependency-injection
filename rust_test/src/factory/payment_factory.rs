use crate::{
    dependencies::payment::PaymentService,
    services::{credit_payment::CreditPaymentService, stripe_payment::StripePaymentService},
};

pub enum PaymentType {
    Credits,
    Card,
}

pub fn payment_factory(payment_type: PaymentType) -> Box<dyn PaymentService> {
    match payment_type {
        PaymentType::Credits => Box::new(CreditPaymentService::new()),
        PaymentType::Card => Box::new(StripePaymentService::new()),
    }
}
