import Icon from "@/components/Icon";
import { orders } from "@/statics";
import { Box, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { memo } from "react";
import { FiChevronRight } from "react-icons/fi";

interface IProps {
  order?: string;
  qty?: number;
}
const OrderItem: React.FC<IProps> = ({ order, qty }): JSX.Element => {
  return (
    <Box px={4} py={6} bg="white" w="full" rounded="lg">
      <HStack>
        <HStack spacing={4}>
          <Box bg="#E5D8F6" p={2.5} rounded="full">
            <Icon isStroke color="#9747FF" name={orders} size={30} />
          </Box>
          <Stack spacing={0}>
            <Text fontSize="xl" fontWeight="bold">
              {order}
            </Text>
            <Text color="rgba(5, 5, 5, 0.5);">{qty}items</Text>
          </Stack>
        </HStack>
        <Spacer />
        <FiChevronRight size={40} />
      </HStack>
    </Box>
  );
};
export default memo(OrderItem);
