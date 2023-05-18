import { Box, Button, Flex, HStack, Heading, VStack } from "@chakra-ui/react";
import { memo } from "react";
import OrderItem from "./Partials/OrderItem";

const Orders: React.FC = (): JSX.Element => {
  return (
    <Box h="100vh" pt={2}>
      <Heading as="h2" size="lg">
        Orders
      </Heading>
      <Flex mt={8} overflowX="auto">
        <Box display="flex" gap={2}>
          <Button bg="primary" color="white" rounded="full">
            Processing
          </Button>
          <Button bg="white" rounded="full">
            Shipped
          </Button>
          <Button bg="white" rounded="full">
            Delivered
          </Button>
          <Button bg="white" rounded="full">
            Returned
          </Button>
          <Button bg="white" rounded="full">
            Canceled
          </Button>
        </Box>
      </Flex>

      <VStack mt={6} spacing={3}>
        <OrderItem order="Order #456765" qty={2} />
        <OrderItem order="Order #456766" qty={4} />
        <OrderItem order="Order #456767" qty={6} />
      </VStack>
    </Box>
  );
};

export default memo(Orders);
