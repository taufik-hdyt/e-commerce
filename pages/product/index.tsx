import Layout from "@/components/Layout";
import Notifications from "@/containers/Notification";
import Order from "@/containers/Orders";
import Product from "@/containers/Product";
import { NextPage } from "next";

const ProductPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader>
      <Product />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default ProductPage;
