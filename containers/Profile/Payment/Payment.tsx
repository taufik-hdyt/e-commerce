import BackButton from '@/components/BackButton';
import Icon from '@/components/Icon';
import { navbarStyled } from '@/components/Navbar/Navbar.styled';
import { payment, rightArrow } from '@/statics';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { memo } from 'react';
import PaymentCard from './Partials/PaymentCard';
import AddPayment from './Partials/AddPayment';
import NavbarAction from '@/components/NavbarAction';
import Link from 'next/link';

const Address: React.FC = (): JSX.Element => {
  return (
    <Box pt={4}>
      {/* <PaymentCard /> */}
      <AddPayment />
    </Box>
  );
};

export default memo(Address);
