import {
  Box,
  Container,
  Heading,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, useState, useEffect } from 'react';
import { ICategory, ILayout } from './Layout.types';
import Header from '../Header';
import Navbar from '../Navbar';
import Drawer from '../Drawer/Drawer';
import axios from 'axios';
import ItemCategory from '../ItemCategory';
import { useAuth } from '@/hooks/useAuth';

const Layout: FC<ILayout> = ({
  children,
  isNoHeader,
  menuSelected,
  pageTitle,
  isNavbarTop,
  isNoNavbar,
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState<ICategory[] | null>(null);
  const { token } = useAuth();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getCategory = () => {
    axios
      .get(`api/categories`, config)
      .then(function (response) {
        setCategory(response.data.data);
      })
      .catch(function (error) {});
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Box bg="#F5F5F5" minH="100vh" boxShadow="sm" maxWidth={500} mx="auto">
      <Header
        isNavbarTop={isNavbarTop}
        isNoHeader={isNoHeader}
        openCategory={onOpen}
      />

      <Container p={0}>{children}</Container>
      {!isNoNavbar && <Navbar menuSelected={menuSelected} />}

      <Drawer isOpen={isOpen} onClose={onClose}>
        <Stack mt={6}>
          {category?.map((e) => {
            return (
              <ItemCategory
                bg="#F5F5F5"
                key={e.id}
                image={e.icon}
                description={e.description}
                name={e.name}
              />
            );
          })}
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Layout;
