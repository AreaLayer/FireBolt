use payjoin::{sender,pubkey}
use payjoin::{amount,address}
use payjoin::PjUriExt
use payjoin::sender::Context

pub struct Configuration {
    disable_output_substitution: bool,
    fee_contribution: Option<(bitcoin::Amount, Option<usize>)>,
    clamp_fee_contribution: bool,
    min_fee_rate: FeeRate,
}

pub strutc tags 
e_input
e_output
event_relay
