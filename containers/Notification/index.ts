import dynamic from "next/dynamic";

const Notifications = dynamic(() => import("./Notifications"), { ssr: false });

export default Notifications;
