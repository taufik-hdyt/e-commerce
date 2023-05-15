import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Dashboard from "@/containers/Dashboard";
import { NextPage, NextPageContext } from "next";
import Login from "@/containers/Login";

const inter = Inter({ subsets: ["latin"] });
const LoginSuccessPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader isNoNavbar>
      <Login />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });
// };

export default LoginSuccessPage;
