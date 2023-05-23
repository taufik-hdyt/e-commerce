import Layout from '@/components/Layout';
import Category from '@/containers/Category';
import Notifications from '@/containers/Notification';
import { NextPage } from 'next';

const NotificationsPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoNavbar isNoHeader menuSelected="notifications">
      <Notifications />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default NotificationsPage;
