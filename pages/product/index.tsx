import Layout from '@/components/Layout';
import Notifications from '@/containers/Notification';
import Order from '@/containers/Orders';
import Product from '@/containers/Product';
import { ITitle } from '@/interfaces/ITitle';
import { IParamGetProduct } from '@/libraries/api/Product/Product.types';
import { NextPage, NextPageContext } from 'next';
import nookies from 'nookies';

const ProductPage: NextPage<ITitle<IParamGetProduct>> = ({
  params,
}): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <Product params={params} />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const search = query?.search as string;
  const cookies = nookies.get(context);

  const params: IParamGetProduct = {
    search: search || '',
  };

  if (!cookies.token) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }

  return {
    props: {
      params,
    },
  };
}

export default ProductPage;
