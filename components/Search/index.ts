import dynamic from "next/dynamic";

const Search = dynamic(() => import("./Search"));

export default Search;
