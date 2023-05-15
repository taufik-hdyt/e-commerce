import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";
import { add, mines } from "@/statics";
import {
  Box,
  Center,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
const Cart: React.FC = (): JSX.Element => {
  return (
    <Box>
      <BackButton link="/profile" />
      <HStack align="end" spacing="auto">
        <Heading mt={2} fontSize="3xl" fontWeight="bold">
          Cart
        </Heading>
        <Box fontWeight="semibold">Remove All</Box>
      </HStack>

      <HStack
        mt={10}
        bg="white"
        p={2}
        align="start"
        spacing={4}
        rounded="lg"
        pr={4}
      >
        <Box pos="relative">
          <Image w={100} src="/example.jpg" alt="name" />
          <Checkbox
            top={1}
            left={1}
            pos="absolute"
            size="lg"
            rounded="lg"
            colorScheme="red"
          />
        </Box>
        <Box w="full">
          <Flex justify="space-between">
            <Box fontWeight="semibold">Mohan blouse</Box>
            <Box color="#9747FF" fontWeight="bold">
              Rp1245
            </Box>
          </Flex>
          <Flex justify="space-between" mt={4}>
            <Flex columnGap={1}>
              Size - <Text fontWeight="bold"> M</Text>
            </Flex>
            <Flex columnGap={3}>
              <Box bg="#9747FF" rounded="full" p={1}>
                <Center h="full">
                  <Icon name={add} size={20} />
                </Center>
              </Box>
              <Box bg="#9747FF" rounded="full" p={1}>
                <Center h="full">
                  <Icon name={mines} size={20} />
                </Center>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </HStack>
    </Box>
  );
};

export default memo(Cart);
