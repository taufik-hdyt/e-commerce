import Layout from '@/components/Layout';
import Category from '@/containers/Category';
import { NextPage } from 'next';

const CategoryPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader>
      <Category />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default CategoryPage;
