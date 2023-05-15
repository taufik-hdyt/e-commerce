import Layout from "@/components/Layout";
import Profile from "@/containers/Profile";
import Address from "@/containers/Profile/Address/Address";
import Payment from "@/containers/Profile/Payment/Payment";
import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const PaymentPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <Payment />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default PaymentPage;
