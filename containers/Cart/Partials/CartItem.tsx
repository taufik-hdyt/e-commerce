import Icon from '@/components/Icon';
import { add, mines } from '@/statics';
import {
  Box,
  Center,
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { memo, useState } from 'react';

const CartItem: React.FC = (): JSX.Element => {
  const [cart, setCart] = useState<number>(1);

  const addCart = () => {
    setCart(cart + 1);
  };
  const minesCart = () => {
    setCart(cart - 1);
  };

  return (
    <HStack bg="white" p={2} align="start" spacing={4} rounded="lg" pr={4}>
      <Box pos="relative">
        <Image w={100} src="/example.jpg" alt="name" />
        <Checkbox
          top={1}
          left={1}
          pos="absolute"
          size="lg"
          rounded="lg"
          colorScheme="purple"
          border="1px solid #9747FF"
        />
      </Box>
      <Box w="full">
        <Flex justify="space-between">
          <Box fontWeight="semibold">Mohan blouse</Box>
          <Box color="primary" fontWeight="bold">
            Rp1245
          </Box>
        </Flex>
        <Flex justify="space-between" mt={4}>
          <Flex columnGap={1}>
            Size - <Text fontWeight="bold"> M</Text>
          </Flex>
          <Flex columnGap={3}>
            <IconButton
              onClick={minesCart}
              size="sm"
              bg="primary"
              rounded="full"
              aria-label="minesCart"
              isDisabled={cart === 1}
            >
              <Icon name={mines} size={20} />
            </IconButton>
            <Box>{cart}</Box>
            <IconButton
              size="sm"
              bg="primary"
              rounded="full"
              aria-label="minesCart"
              onClick={addCart}
            >
              <Icon name={add} size={20} />
            </IconButton>
          </Flex>
        </Flex>
      </Box>
    </HStack>
  );
};

export default memo(CartItem);
