use crate::factory::payment_factory::payment_factory;

mod dependencies;
mod factory;
mod services;

fn main() {
    let payment_service = payment_factory(factory::payment_factory::PaymentType::Credits);

    payment_service.purchase(123, "asdf123").unwrap()
}
