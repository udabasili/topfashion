import React from "react";
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton =({price}) =>{
    //stripe needs the value in cents
    const priceForStripe = price * 100;
    const publishableKey = process.env.STRIPE_API
    return(
        <StripeCheckout
            label="Pay Now"
            name="Top Fashion"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay"
            token={f=>f}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton