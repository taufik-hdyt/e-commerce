import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';

import { NextPage, NextPageContext } from 'next';
import SetGender from '@/containers/Login/SetGender/SetGender';
import nookies from 'nookies';
import { useAuth } from '@/hooks/useAuth';

const inter = Inter({ subsets: ['latin'] });

const SetGenderPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader isNoNavbar>
      <SetGender />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const cookies = nookies.get(context);
  return {
    props: {
      title: 'Set Gender',
      token: cookies?.token ?? null,
    },
  };
}

export default SetGenderPage;
