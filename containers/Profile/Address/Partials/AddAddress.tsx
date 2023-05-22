import BackButton from "@/components/BackButton";
import NavbarAction from "@/components/NavbarAction";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";
const AddAddress: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box>
        <BackButton link="/profile" />
        <Heading mt={2} fontSize="3xl" fontWeight="bold">
          Add Address
        </Heading>
        <VStack mt={6}>
          <Input
            variant="filled"
            size="lg"
            bg="white"
            placeholder="Street Address"
          />
          <Input variant="filled" size="lg" bg="white" placeholder="City" />
          <Flex gap={6}>
            <Input variant="filled" size="lg" bg="white" placeholder="State" />
            <Input
              variant="filled"
              size="lg"
              bg="white"
              placeholder="Zip Code"
            />
          </Flex>
        </VStack>
      </Box>

      <NavbarAction posFixed>
        <Center h="full">
          <HStack
            w="34vw"
            bg="primary"
            justify="center"
            color="white"
            rounded="full"
            px={6}
            py={"1.5"}
          >
            <Button variant="unstyled">Save</Button>
          </HStack>
        </Center>
      </NavbarAction>
    </Box>
  );
};

export default memo(AddAddress);
