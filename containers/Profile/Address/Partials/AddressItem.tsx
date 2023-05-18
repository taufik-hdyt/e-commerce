import BackButton from "@/components/BackButton";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { memo } from "react";
const AddressItem: React.FC = (): JSX.Element => {
  return (
    <Box>
      <BackButton link="/profile" />
      <Heading mt={2} fontSize="3xl" fontWeight="bold">
        Address
      </Heading>

      <HStack spacing="auto" bg="white" mt={8} px={6} py={4} rounded="lg">
        <Box>2715 Ash Dr. San Jose, South Dakota 83475</Box>
        <Button variant="unstyled" color="primary">
          Edit
        </Button>
      </HStack>
    </Box>
  );
};

export default memo(AddressItem);
