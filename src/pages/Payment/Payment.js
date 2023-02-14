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
  console.log(location.state);
  const userId = location.state.data.owner._id;
  const price = location.state.data.product_price;
  const title = location.state.data.product_name;
  // console.log(userId);

  const shippingFee = ((20 / 100) * price).toFixed(2);
  const handleFee = ((10 / 100) * price).toFixed(2);
  const totalPrice = (
    Number(price) +
    Number(shippingFee) +
    Number(handleFee)
  ).toFixed(2);
  // const totalPriceInCents = totalPrice * 1000;
  return (
    <div className="payment-main">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          userId={userId}
          title={title}
          price={price}
          shippingFee={shippingFee}
          handleFee={handleFee}
          totalPrice={totalPrice}
          // totalPriceInCents={totalPriceInCents}
        />
      </Elements>
    </div>
  );
};

export default Payment;
