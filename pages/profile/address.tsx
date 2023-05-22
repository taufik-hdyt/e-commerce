import Layout from '@/components/Layout';
import Profile from '@/containers/Profile';
import Address from '@/containers/Profile/Address/Address';
import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const AddressPage: NextPage = (): JSX.Element => {
  return (
    <Layout isNoPadding isNoNavbar isNoHeader menuSelected="profile">
      <Address />
    </Layout>
  );
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   return middleware(context, "/", {
//     title: "Dashboard",
//   });

export default AddressPage;
