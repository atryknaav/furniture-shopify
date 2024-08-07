"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeAppearance {
  theme: 'stripe' | 'night' | 'flat';
}

interface StripeElementsOptions {
  clientSecret: string;
  appearance: StripeAppearance;
}

const CheckoutPage = () => {
  const amount = useSelector((state: RootState) => state.shoppingCart.total);
  const shpCart = useSelector((state: RootState) => state.shoppingCart);

  const stripe = useStripe();
  const elements = useElements();
  const[email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const boughtItems = shpCart.products
  .map(product => `${product.name} X ${product.qnt} for $${product.price} each`)
  .join(', ');
    
        try {
                
          const response = await fetch('/api/sendReceipt', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json',
    
              },
              body: JSON.stringify({
                email: email,
                message: `Thank you for shopping with us! Today you bought: ${boughtItems}! Your total is $${shpCart.total}!`
              }),
          });
    
          if (!response.ok) {
              console.log("falling over")
              throw new Error(`response status: ${response.status}`);
          }
          const responseData = await response.json();
          console.log(responseData['message'])
    
          
      } catch (err) {
          console.error(err);
          
      }
    
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }







    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret &&
        <div className=" flex flex-col mb-2">
            <label htmlFor="email" className=" text-black font-light text-left">Email:</label>
            <input type="text" required  className=" border-[1px] rounded-md text-md p-2 font-light text-black" value={email} onChange={(e) => (setEmail(e.target.value))}/>
        </div>}

        <p className=" text-[#35353565]">Use 4242 4242 4242 4242 cart to test</p>
      {clientSecret && <PaymentElement />}
        
      {errorMessage && <div className=" text-black">{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
