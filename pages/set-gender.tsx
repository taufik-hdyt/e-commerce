import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';

import { NextPage, NextPageContext } from 'next';
import SetGender from '@/containers/Login/SetGender/SetGender';
import nookies from 'nookies';
import { useAuth } from '@/hooks/useAuth';

const inter = Inter({ subsets: ['latin'] });
const LoginPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader isNoNavbar>
      <SetGender />
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
      title: 'Login',
    },
  };
}

export default LoginPage;
