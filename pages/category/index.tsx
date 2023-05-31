import Layout from '@/components/Layout';
import Category from '@/containers/Category';
import { ITitle } from '@/interfaces/ITitle';
import { IParamGetCategory } from '@/libraries/api/Category/Category.types';
import { NextPage, NextPageContext } from 'next';
import nookies from 'nookies';

const CategoryPage: NextPage<ITitle<IParamGetCategory>> = ({
  params,
}): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <Category params={params} />
    </Layout>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  const cookies = nookies.get(context);
  const search = query?.search as string;

  const params: IParamGetCategory = {
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
};

export default CategoryPage;
