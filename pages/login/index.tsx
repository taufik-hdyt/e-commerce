import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { NextPage, NextPageContext } from 'next';
import Login from '@/containers/Login';
import nookies from 'nookies';

const inter = Inter({ subsets: ['latin'] });
const LoginSuccessPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader isNoNavbar>
      <Login />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const cookies = nookies.get(context);
  if (cookies.token) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      title: 'Login',
    },
  };
}

export default LoginSuccessPage;
