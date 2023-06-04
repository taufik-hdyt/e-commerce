import Layout from '@/components/Layout';
import Splash from '@/components/Splash';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { useEffect } from 'react';

const SplashPage: NextPage = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    });
  }, []);

  return (
    <Layout isNoHeader isNoNavbar>
      <Splash />
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
      title: 'Splash',
    },
  };
}

export default SplashPage;
