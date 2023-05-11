import Layout from "@/components/Layout";
import Category from "@/containers/Category";
import { NextPage } from "next";

const CategoryPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader>
      <Category />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default CategoryPage;
