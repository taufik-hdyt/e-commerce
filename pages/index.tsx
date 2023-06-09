import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Dashboard from '@/containers/Dashboard';
import { NextPage, NextPageContext } from 'next';
import nookies from 'nookies';

const HomePage: NextPage = (): JSX.Element => {
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
    },
  };
}

export default HomePage;
