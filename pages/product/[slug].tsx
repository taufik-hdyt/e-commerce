import Layout from '@/components/Layout';
import ProductDetail from '@/containers/Product/Partials/ProductDetail';
import { NextPage, NextPageContext } from 'next';
import nookies from 'nookies';

interface IProps {
  slug: string;
  params: Record<string, any>;
}
const ProductDetailPage: NextPage<IProps> = ({ params, slug }): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <ProductDetail params={params} slug={slug} />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;

  const params: Record<string, string> = {
    slug: query?.slug as string,
  };

  const cookies = nookies.get(context);
  if (!cookies.token) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }

  return {
    props: {
      title: 'Detail Product',
    },
  };
}

export default ProductDetailPage;
