import dynamic from "next/dynamic";

const ProductDetail = dynamic(() => import("./ProductDetail"), { ssr: false });

export default ProductDetail;
