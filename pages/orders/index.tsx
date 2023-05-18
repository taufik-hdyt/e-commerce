import Layout from "@/components/Layout";
import Notifications from "@/containers/Notification";
import Orders from "@/containers/Orders";

import { NextPage } from "next";

const OrdersPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader menuSelected="orders">
      <Orders />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default OrdersPage;
