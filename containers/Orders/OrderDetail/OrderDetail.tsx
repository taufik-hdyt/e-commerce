import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";
import { leftArrow, orders } from "@/statics";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import Step from "./Partials/step";

const OrderDetail: React.FC = (): JSX.Element => {
  return (
    <Box minH="100vh" pb={10} pt={4}>
      <BackButton link="/" />
      <Heading mt={4} as="h2" size="lg">
        Order #456776
      </Heading>

      <Stack mt={4}>
        <Step title="step 1" isActive isDanger isDone isFullWidth isSmall />
      </Stack>

      <Box mt={60} fontSize="lg" fontWeight="bold">
        Order Items
      </Box>
      <HStack bg="white" mt={4} p={4} rounded="lg">
        <HStack spacing={4}>
          <Box bg="#E5D8F6" p={2.5} rounded="full">
            <Icon isStroke color="#9747FF" name={orders} size={30} />
          </Box>
          <Stack spacing={0}>
            <Text fontWeight="semibold">4 items</Text>
          </Stack>
        </HStack>
        <Spacer />
        <Box color="primary" fontWeight="semibold">
          View All
        </Box>
      </HStack>

      <Box mt={8} fontSize="lg" fontWeight="bold">
        Shipping details
      </Box>
      <Box mt={4} bg="white" p={6} rounded="lg">
        2715 Ash Dr. San Jose, South Dakota 83475
      </Box>
    </Box>
  );
};

export default memo(OrderDetail);
