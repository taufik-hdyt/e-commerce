import BackButton from "@/components/BackButton";
import { Box, Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
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

      <Button rounded="full" size="lg" bg="primary" color="white">
        Save
      </Button>
    </Box>
  );
};

export default memo(AddAddress);
