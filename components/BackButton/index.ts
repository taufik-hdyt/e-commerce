import dynamic from "next/dynamic";

const BackButton = dynamic(() => import("./BackButton"));

export default BackButton;
