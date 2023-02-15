import "../CheckoutForm/checkoutForm.css";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({
  userId,
  title,
  price,
  totalPrice,
  shippingFee,
  handleFee,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const cardElement = elements.getElement(CardElement);
      // console.log(cardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });
      // console.log(stripeResponse);

      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);
      console.log(title);
      console.log(totalPrice);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: totalPrice,
        }
      );
      console.log(response.data);

      if (response.data === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="checkout-summary">
        <div className="checkout-title">
          <span>Résumé de la commande</span>
        </div>
        <div className="checkout-details">
          <ul>
            <li>
              <span>Commande</span>
              <span>{price} €</span>
            </li>
            <li>
              <span>Frais protection acheteurs</span>
              <span>{handleFee} €</span>
            </li>
            <li>
              <span>Frais de port</span>
              <span>{shippingFee} €</span>
            </li>
          </ul>
        </div>
        <div className="checkout-total">
          <span>Total</span>
          <span>{totalPrice} €</span>
        </div>
      </div>
      <div className="payment-content">
        <p>
          Il ne vous reste plus qu'un étape pour vous offrir{" "}
          <span className="bold">{title}</span>. Vous allez payer{" "}
          <span className="bold">{totalPrice} €</span> (frais de protection et
          frais de port inclus).
        </p>
        <CardElement className="card-input" />
      </div>
      {completed ? (
        <p>Paiement effectué</p>
      ) : (
        <button disabled={isLoading} className="pay-button" type="submit">
          Confimer le paiement
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
