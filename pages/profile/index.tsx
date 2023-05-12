import Layout from "@/components/Layout";
import Profile from "@/containers/Profile";
import { NextPage } from "next";

const ProfilePage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader menuSelected="profile">
      <Profile />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default ProfilePage;
