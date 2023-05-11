import dynamic from "next/dynamic";

const Empty = dynamic(() => import("./Empty"));

export default Empty;
