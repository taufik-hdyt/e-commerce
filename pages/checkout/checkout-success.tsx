import Layout from "@/components/Layout";
import CheckoutSuccess from "@/containers/Checkout/SuccessCheckout/CheckoutSuccess";
import { NextPage } from "next";

const CheckoutSuccessPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <CheckoutSuccess />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default CheckoutSuccessPage;
