import { Box, Button, Flex, HStack, Heading, VStack } from '@chakra-ui/react';
import { memo, useState } from 'react';
import OrderItem from './Partials/OrderItem';

const Orders: React.FC = (): JSX.Element => {
  const [selectedOrder, setSelectedOrder] = useState('Processing');
  const handleOrderSelection = (gender: any) => {
    setSelectedOrder(gender);
  };
  return (
    <Box h="100vh" pt={2}>
      <Heading px={4} as="h2" size="lg">
        Orders
      </Heading>
      <Flex mt={8} overflowX="auto">
        <Box display="flex" gap={2} px={4}>
          <Button
            onClick={() => {
              handleOrderSelection('Processing');
            }}
            bg={selectedOrder === 'Processing' ? 'primary' : 'white'}
            color={selectedOrder === 'Processing' ? 'white' : ''}
            rounded="full"
          >
            Processing
          </Button>
          <Button
            onClick={() => {
              handleOrderSelection('Shipped');
            }}
            bg={selectedOrder === 'Shipped' ? 'primary' : 'white'}
            color={selectedOrder === 'Shipped' ? 'white' : ''}
            rounded="full"
          >
            Shipped
          </Button>
          <Button
            onClick={() => {
              handleOrderSelection('Delivered');
            }}
            bg={selectedOrder === 'Delivered' ? 'primary' : 'white'}
            color={selectedOrder === 'Delivered' ? 'white' : ''}
            rounded="full"
          >
            Delivered
          </Button>
          <Button
            onClick={() => {
              handleOrderSelection('Returned');
            }}
            bg={selectedOrder === 'Returned' ? 'primary' : 'white'}
            color={selectedOrder === 'Returned' ? 'white' : ''}
            rounded="full"
          >
            Returned
          </Button>
          <Button
            onClick={() => {
              handleOrderSelection('Canceled');
            }}
            bg={selectedOrder === 'Canceled' ? 'primary' : 'white'}
            color={selectedOrder === 'Canceled' ? 'white' : ''}
            rounded="full"
          >
            Canceled
          </Button>
        </Box>
      </Flex>

      <VStack mt={6} spacing={3} px={4}>
        <OrderItem order="Order #456765" qty={2} />
        <OrderItem order="Order #456766" qty={4} />
        <OrderItem order="Order #456767" qty={6} />
      </VStack>
    </Box>
  );
};

export default memo(Orders);
