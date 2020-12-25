import React from "react";
import StripeCheckout from "react-stripe-checkout"
import { toast } from "react-toastify";
import Image from '../assets/tie.svg'
const StripeCheckoutButton =({price, clearAllCartItems}) =>{
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_API;

    const onToken = (token) => {
        toast.success('Order submitted')
        clearAllCartItems()

    }
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
            token={onToken} 
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton