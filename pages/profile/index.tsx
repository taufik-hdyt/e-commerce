import Layout from '@/components/Layout';
import Profile from '@/containers/Profile';
import { NextPage, NextPageContext } from 'next';
import nookies from 'nookies';

const ProfilePage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader menuSelected="profile">
      <Profile />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
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
      title: 'Profile',
    },
  };
}

export default ProfilePage;
