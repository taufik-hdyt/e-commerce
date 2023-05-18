import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import Register from "@/containers/Register";

const inter = Inter({ subsets: ["latin"] });
const HomePage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader isNoNavbar>
      <Register />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });
// };

export default HomePage;
