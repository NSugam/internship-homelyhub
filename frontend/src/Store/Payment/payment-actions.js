import { setPaymentDetails } from "./payment-slice";
import { cardNumberElement } from '@stripe/react-stripe-js'
import axios from "axios";

export const processPayment =({
    totalAmount,
    stripe,
    elements,
    checkinDate,
    checkoutDate,
    propertyName,
    address,
    maximumGuest,
    bookingId,
    nights,
    dispatch,
    navigate
}) => {
    return async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            console.error("Stripe is not initialized")
            return;
        }
    }
}