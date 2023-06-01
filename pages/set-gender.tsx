import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';

import { NextPage, NextPageContext } from 'next';
import SetGender from '@/containers/Login/Partials/SetGender/SetGender';

const SetGenderPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoHeader isNoNavbar>
      <SetGender />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      title: 'Set Gender',
    },
  };
}

export default SetGenderPage;
