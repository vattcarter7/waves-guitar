import React from 'react';
//import { connect } from 'react-redux';
import StripeCheckoutButton from '../utils/stripe_checkout_button';

const CheckoutPage = ({total}) => (
  <StripeCheckoutButton price={total} />
)

// const mapStateToProps = (state) => {
//   console.log("HHHHHaaaaaa" +state.user.cartDetail[0].price);
//   return {
//     user : state.user
//   }
// }

export default CheckoutPage; 