import dynamic from "next/dynamic";

const NavbarAction = dynamic(() => import("./NavbarAction"));

export default NavbarAction;
