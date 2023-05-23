import BackButton from '@/components/BackButton';
import Icon from '@/components/Icon';
import { discount, rightArrow } from '@/statics';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { memo } from 'react';
import CartItem from './Partials/CartItem';
import Link from 'next/link';
import NavbarAction from '@/components/NavbarAction';
const Cart: React.FC = (): JSX.Element => {
  return (
    <Box pt={4} pb="70px">
      <Box pb={4} px={4}>
        <BackButton link="/profile" />
        <HStack align="end" spacing="auto">
          <Heading mt={2} fontSize="3xl" fontWeight="bold">
            Cart
          </Heading>
          <Box fontWeight="semibold">Remove All</Box>
        </HStack>

        <Stack mt={6}>
          <CartItem />
          <CartItem />
        </Stack>

        <Stack mt={6}>
          <Flex justify="space-between">
            <Box
              fontSize="lg"
              fontWeight="semibold"
              color="rgba(5, 5, 5, 0.5);"
            >
              Subtotal
            </Box>
            <Box fontSize="lg">Rp15000</Box>
          </Flex>
          <Flex justify="space-between">
            <Box
              fontSize="lg"
              fontWeight="semibold"
              color="rgba(5, 5, 5, 0.5);"
            >
              Shipping Cost
            </Box>
            <Box fontSize="lg">Rp15000</Box>
          </Flex>
          <Flex justify="space-between">
            <Box
              fontSize="lg"
              fontWeight="semibold"
              color="rgba(5, 5, 5, 0.5);"
            >
              Tax
            </Box>
            <Box fontSize="lg">Rp15000</Box>
          </Flex>
          <Flex justify="space-between">
            <Box
              fontSize="lg"
              fontWeight="semibold"
              color="rgba(5, 5, 5, 0.5);"
            >
              Total
            </Box>
            <Box fontWeight="bold" fontSize="lg">
              Rp15000
            </Box>
          </Flex>
        </Stack>

        <Box mt={10}>
          <InputGroup bg="white" rounded="lg" p={2.5}>
            <Input
              ml={5}
              type="text"
              variant="unstyled"
              py={3}
              placeholder="Enter Coupon Code"
            />

            <InputLeftElement ml={3} h="full">
              <Icon isSimple name={discount} size={30} />
            </InputLeftElement>
            <InputRightElement mt={3} pr={6}>
              <Box bg="primary" p={3} rounded="full">
                <Icon isStroke color="white" name={rightArrow} size={20} />
              </Box>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>

      <NavbarAction>
        <Center h="full">
          <HStack
            as={Link}
            href="/checkout"
            maxW="100vw"
            w="full"
            bg="primary"
            justify="center"
            color="white"
            rounded="full"
            px={6}
            py={1.5}
          >
            <Button variant="unstyled">Checkout</Button>
          </HStack>
        </Center>
      </NavbarAction>
    </Box>
  );
};

export default memo(Cart);
