import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";
import NavbarAction from "@/components/NavbarAction";
import { rightArrow } from "@/statics";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

const Checkout: React.FC = (): JSX.Element => {
  return (
    <Box pt={4} pb={24}>
      <BackButton link="/cart" />
      <Heading mt={2} fontSize="3xl" fontWeight="bold">
        Checkout
      </Heading>

      <HStack
        mt={4}
        bg="white"
        cursor="pointer"
        px={4}
        py={5}
        rounded="lg"
        spacing="auto"
      >
        <Stack spacing={0}>
          <Box color="secondary">Shipping Address</Box>
          <Box fontWeight="semibold">Add Shipping Address</Box>
        </Stack>

        <Box>
          <Icon name={rightArrow} isSimple size={20} />
        </Box>
      </HStack>

      <HStack
        cursor="pointer"
        mt={4}
        bg="white"
        px={4}
        py={5}
        rounded="lg"
        spacing="auto"
      >
        <Stack spacing={0}>
          <Box color="secondary">Payment Method</Box>
          <Box fontWeight="semibold">Add Payment Method</Box>
        </Stack>
        <Box>
          <Icon name={rightArrow} isSimple size={20} />
        </Box>
      </HStack>

      <Stack mt={120}>
        <Flex justify="space-between">
          <Box fontSize="lg" fontWeight="semibold" color="rgba(5, 5, 5, 0.5);">
            Subtotal
          </Box>
          <Box fontSize="lg">Rp15000</Box>
        </Flex>
        <Flex justify="space-between">
          <Box fontSize="lg" fontWeight="semibold" color="rgba(5, 5, 5, 0.5);">
            Shipping Cost
          </Box>
          <Box fontSize="lg">Rp15000</Box>
        </Flex>
        <Flex justify="space-between">
          <Box fontSize="lg" fontWeight="semibold" color="rgba(5, 5, 5, 0.5);">
            Tax
          </Box>
          <Box fontSize="lg">Rp15000</Box>
        </Flex>
        <Flex justify="space-between">
          <Box fontSize="lg" fontWeight="semibold" color="rgba(5, 5, 5, 0.5);">
            Total
          </Box>
          <Box fontWeight="bold" fontSize="lg">
            Rp15000
          </Box>
        </Flex>
      </Stack>

      <NavbarAction posFixed>
        <Center h="full">
          <HStack
            w="34vw"
            bg="primary"
            spacing="auto"
            color="white"
            rounded="full"
            px={6}
            py={"1.5"}
          >
            <Box fontWeight="bold">Rp14800</Box>

            <Button variant="unstyled">
              <Link href="/checkout/checkout-success">Place Order</Link>
            </Button>
          </HStack>
        </Center>
      </NavbarAction>
    </Box>
  );
};

export default memo(Checkout);
