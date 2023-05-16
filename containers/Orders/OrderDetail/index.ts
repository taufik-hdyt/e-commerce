import dynamic from "next/dynamic";

const OrderDetail = dynamic(() => import("./OrderDetail"), {
  ssr: false,
});

export default OrderDetail;
