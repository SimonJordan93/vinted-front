import "../Payment/payment.css";
import { useLocation } from "react-router-dom";

// Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Components
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  // console.log(location.state);
  const userId = location.state.data.owner._id;
  const price = location.state.data.product_price;
  const name = location.state.data.product_description;
  // console.log(userId);

  const fee = 2;
  const shipping = 4;
  const totalPrice = parseInt(price) + fee + shipping;
  const totalPriceInCents = totalPrice * 1000;
  return (
    <div className="payment-main">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          userId={userId}
          name={name}
          price={price}
          totalPrice={totalPrice}
          totalPriceInCents={totalPriceInCents}
        />
      </Elements>
    </div>
  );
};

export default Payment;
