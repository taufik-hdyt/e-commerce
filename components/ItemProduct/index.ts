import dynamic from "next/dynamic";

const ItemProduct = dynamic(() => import("./ItemProduct"));

export default ItemProduct;
