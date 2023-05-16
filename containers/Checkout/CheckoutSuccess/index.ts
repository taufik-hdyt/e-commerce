import dynamic from "next/dynamic";

const CheckoutSuccess = dynamic(() => import("./CheckoutSuccess"), {
  ssr: false,
});

export default CheckoutSuccess;
