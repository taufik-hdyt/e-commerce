import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Dashboard from "@/containers/Dashboard";
import { NextPage, NextPageContext } from "next";

const inter = Inter({ subsets: ["latin"] });
const HomePage: NextPage = (): JSX.Element => {
  return (
    <Layout isNavbarTop menuSelected="home">
      <Dashboard />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });
// };

export default HomePage;
