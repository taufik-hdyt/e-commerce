import Layout from "@/components/Layout";
import Notifications from "@/containers/Notification";
import Order from "@/containers/Orders";
import OrderDetail from "@/containers/Orders/OrderDetail/OrderDetail";
import { NextPage } from "next";

const OrdersDetailPage: NextPage = (): JSX.Element => {
  return (
    <Layout pageTitle="Orders" isNoNavbar isNoHeader>
      <OrderDetail />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default OrdersDetailPage;
