import Layout from '@/components/Layout';
import Cart from '@/containers/Cart';
import Checkout from '@/containers/Checkout';
import { NextPage } from 'next';

const CheckoutPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoPadding isNoNavbar isNoHeader>
      <Checkout />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default CheckoutPage;
