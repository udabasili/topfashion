import React from "react";
import StripeCheckout from "react-stripe-checkout"
import Image from '../assets/tie.svg'
const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = process.env.STRIPE_API;

    return(
        <StripeCheckout
            label="Pay Now"
            name="Top Fashion"
            billingAddress
            shippingAddress
            image={Image}
            description={`Total: $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={f=>f}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton