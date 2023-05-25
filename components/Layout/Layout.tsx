import { Box, Container, Heading, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { ILayout } from './Layout.types';
import Header from '../Header';
import Navbar from '../Navbar';
import Drawer from '../Drawer/Drawer';
import ItemCategory from '@/containers/Category/Partials/ItemCategory';

const Layout: FC<ILayout> = ({
  children,
  isNoHeader,
  menuSelected,
  pageTitle,
  isNavbarTop,
  isNoNavbar,
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="#F5F5F5" minH="100vh" boxShadow="sm" maxWidth={500} mx="auto">
      <Header
        isNavbarTop={isNavbarTop}
        isNoHeader={isNoHeader}
        pageTitle={pageTitle}
        openCategory={onOpen}
      />

      <Container p={0}>{children}</Container>
      {!isNoNavbar && <Navbar menuSelected={menuSelected} />}

      <Drawer isOpen={isOpen} onClose={onClose}>
        <Box mt={10} rounded="lg" bg="#F5F5F5" h={20}></Box>
      </Drawer>
    </Box>
  );
};

export default Layout;
