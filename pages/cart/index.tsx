import Layout from '@/components/Layout';
import Cart from '@/containers/Cart';
import { NextPage } from 'next';

const OrdersPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <Cart />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default OrdersPage;
