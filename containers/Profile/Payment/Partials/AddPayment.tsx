import BackButton from '@/components/BackButton';
import Icon from '@/components/Icon';
import NavbarAction from '@/components/NavbarAction';

import { payment, rightArrow } from '@/statics';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

const AddPayment: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box px={4}>
        <BackButton link="/profile" />
        <Heading mt={2} fontSize="3xl" fontWeight="bold">
          Add Card
        </Heading>
        <Stack mt={10} spacing={4}>
          <Input
            variant="filled"
            size="lg"
            bg="white"
            placeholder="Card Number"
          />

          <Flex gap={6}>
            <Input variant="filled" size="lg" bg="white" placeholder="CCV" />
            <Input variant="filled" size="lg" bg="white" placeholder="Exp" />
          </Flex>
        </Stack>
      </Box>

      <NavbarAction>
        <Center h="full">
          <HStack
            as={Link}
            href="/profile"
            w="34vw"
            bg="primary"
            justify="center"
            color="white"
            rounded="full"
            px={6}
            py={'1.5'}
          >
            <Button variant="unstyled">Save</Button>
          </HStack>
        </Center>
      </NavbarAction>
    </Box>
  );
};

export default memo(AddPayment);
