import "../CheckoutForm/checkoutForm.css";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const Stripe = useStripe();
  const elements = useElements();

  try {
  } catch (error) {
    console.log(error.message);
  }

  return (
    <form className="checkout-form">
      <div className="checkout-summary">
        <div className="checkout-title">
          <span>Résumé de la commande</span>
        </div>
        <div className="checkout-details">
          <ul>
            <li>
              <span>Commande</span>
              <span>100 €</span>
            </li>
            <li>
              <span>Frais protection acheteurs</span>
              <span>2 €</span>
            </li>
            <li>
              <span>Frais de port</span>
              <span>4 €</span>
            </li>
          </ul>
        </div>
        <div className="checkout-total">
          <span>Total</span>
          <span>106 €</span>
        </div>
      </div>
      <div className="payment-content">
        <p>
          Il ne vous reste plus qu'un étape pour vous offrir{" "}
          <span className="bold">Oups</span>. Vous allez payer{" "}
          <span className="bold">0.00001 €</span> (frais de protection et frais
          de port inclus).
        </p>
        <CardElement />
      </div>
    </form>
  );
};

export default CheckoutForm;
