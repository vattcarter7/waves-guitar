import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = () => {
  const price = 202;
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_OedyVsH6qjsZSnu82dGCoMK800vOrewC0S";

  const onToken = token => {
    axios({
      url: "/api/payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        console.log(response.data);
        alert(`We are in business`);
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="WAVES GUITAR Ltd."
      billingAddress
      shippingAddress
      image="https://images-na.ssl-images-amazon.com/images/I/81tQhEEtiEL._SY355_.jpg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
