import dynamic from "next/dynamic";

const Checkout = dynamic(() => import("./Checkout"), { ssr: false });
const CheckoutSuccess = dynamic(() => import("./CheckoutSuccess"), {
  ssr: false,
});

export default { Checkout, CheckoutSuccess };
