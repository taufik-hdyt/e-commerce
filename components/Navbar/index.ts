import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"));

export default Navbar;
