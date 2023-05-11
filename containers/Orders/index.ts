import dynamic from "next/dynamic";

const Orders = dynamic(() => import("./Orders"), { ssr: false });

export default Orders;
