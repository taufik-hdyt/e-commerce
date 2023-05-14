import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import { memo } from "react";
import OrderItem from "./Partials/OrderItem";

const Orders: React.FC = (): JSX.Element => {
  return (
    <Box mt={16} maxWidth={500}>
      <HStack overflowX="auto">
        <Button bg="#9747FF" color="white" rounded="full">
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
      </HStack>

      <VStack mt={4} spacing={3}>
        <OrderItem order="Order #456765" qty={2} />
        <OrderItem order="Order #456766" qty={4} />
        <OrderItem order="Order #456767" qty={6} />
      </VStack>
    </Box>
  );
};

export default memo(Orders);
