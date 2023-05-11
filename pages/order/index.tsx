import Layout from "@/components/Layout";
import Notifications from "@/containers/Notification";
import Order from "@/containers/Orders";
import { NextPage } from "next";

const OrdersPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader isOrders menuSelected="order">
      <Order />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default OrdersPage;
