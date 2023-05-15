import Layout from "@/components/Layout";
import Notifications from "@/containers/Notification";
import Order from "@/containers/Orders";
import Product from "@/containers/Product";
import ProductDetail from "@/containers/Product/ProductDetail";
import { NextPage } from "next";

const ProductDetailPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <ProductDetail />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default ProductDetailPage;
