'use client';

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "@/components/Checkout/Checkout"


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Home() {
  const amount = 49.99;

  return(
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-amber-400 to-lime-700">
      <div className=" mb-10">
        <h1 className="text-4xl font-extrabold mb-2">MARREJ</h1>
      </div>

      <Elements stripe={stripePromise} options={{
        mode: "payment",
        amount: amount * 100,
        currency: "usd"
      }}>
        <CheckoutPage />
      </Elements>
    </main>
  )
}













// interface StripeAppearance {
//   theme: 'stripe' | 'night' | 'flat';
// }

// interface StripeElementsOptions {
//   clientSecret: string;
//   appearance: StripeAppearance;
// }

// export default function App() {
//   const [clientSecret, setClientSecret] = React.useState("");

//   React.useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/api/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance: StripeAppearance = {
//     theme: 'stripe'
//   };

//   const options: StripeElementsOptions = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           {/* <CheckoutForm /> */}
//           <div>
//             HI
//           </div>
//         </Elements>
//       )}
//     </div>
//   );
// }
