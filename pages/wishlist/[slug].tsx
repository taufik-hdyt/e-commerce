import Layout from "@/components/Layout";
import WishlistProduct from "@/containers/Profile/Wishlist/Partials/WishlistProduct";
import Wishlist from "@/containers/Profile/Wishlist/Wishlist";
import { NextPage } from "next";

const WishlistProductPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <WishlistProduct />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default WishlistProductPage;
