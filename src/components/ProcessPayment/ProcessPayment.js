import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from "./SimpleCardForm";
const stripePromise = loadStripe(
  "pk_test_51IeNp5Kym1fi5R08yyC80UzBqBZdEcm7e7eyMm7NaVLO44RmeFu9EQvjNgDGFv7hER18S5UsUGJucfQmipJb0KQS00j99Urrfz"
);
const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
        <SimpleCardForm></SimpleCardForm>
     
    </Elements>
  );
};
export default ProcessPayment;
