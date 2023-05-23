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

const Address: React.FC = (): JSX.Element => {
  return (
    <Box pt={4}>
      <Box px={4} h="full" minH="85vh">
        <BackButton link="/cart" />
        <Heading mt={2} fontSize="3xl" fontWeight="bold">
          Add Address
        </Heading>

        <VStack mt={6}>
          <Input
            variant="filled"
            size="lg"
            bg="white"
            placeholder="Street Address"
          />
          <Input variant="filled" size="lg" bg="white" placeholder="City" />
          <Flex gap={6}>
            <Input variant="filled" size="lg" bg="white" placeholder="State" />
            <Input
              variant="filled"
              size="lg"
              bg="white"
              placeholder="Zip Code"
            />
          </Flex>
        </VStack>
      </Box>

      <NavbarAction>
        <Center h="full">
          <HStack
            bg="primary"
            spacing="auto"
            color="white"
            rounded="full"
            maxW="100vw"
            justify="center"
            w="full"
            py={1.5}
            px={4}
          >
            <Button variant="unstyled">Save</Button>
          </HStack>
        </Center>
      </NavbarAction>
    </Box>
  );
};

export default memo(Address);
