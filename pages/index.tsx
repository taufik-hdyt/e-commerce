import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Dashboard from '@/containers/Dashboard';
import { NextPage, NextPageContext } from 'next';
import nookies from 'nookies';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

interface IProps {
  token: string;
}
const HomePage: NextPage<IProps> = ({ token }): JSX.Element => {
  return (
    <Layout isNavbarTop menuSelected="home">
      <Dashboard />
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
      title: 'Dashboard',
      token: cookies?.token ?? null,
    },
  };
}

export default HomePage;
