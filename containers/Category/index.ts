import dynamic from "next/dynamic";

const Category = dynamic(() => import("./Category"), { ssr: false });

export default Category;
