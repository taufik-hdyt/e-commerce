import Layout from "@/components/Layout";
import Wishlist from "@/containers/Profile/Wishlist/Wishlist";
import { NextPage } from "next";

const AddressPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <Wishlist />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default AddressPage;
