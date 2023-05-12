import dynamic from "next/dynamic";

const ProfileDetail = dynamic(() => import("./ProfileDetail"), { ssr: false });

export default ProfileDetail;
