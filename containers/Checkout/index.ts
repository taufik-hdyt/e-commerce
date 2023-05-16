import dynamic from "next/dynamic";

const Checkout = dynamic(() => import("./Checkout"), { ssr: false });

export default Checkout;
