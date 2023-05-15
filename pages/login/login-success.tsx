import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

import { NextPage } from "next";
import Login from "@/containers/Login";
import AfterLogin from "@/containers/Login/AfterLogin/AfterLogin";

const inter = Inter({ subsets: ["latin"] });
const LoginPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader isNoNavbar>
      <AfterLogin />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });
// };

export default LoginPage;
