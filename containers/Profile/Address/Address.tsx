import BackButton from '@/components/BackButton';
import Icon from '@/components/Icon';
import NavbarAction from '@/components/NavbarAction';
import { rightArrow } from '@/statics';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  IconButton,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import AddAddress from './Partials/AddAddress';

const Address: React.FC = (): JSX.Element => {
  return (
    <Box px={4} pt={4}>
      <AddAddress />
    </Box>
  );
};

export default memo(Address);
