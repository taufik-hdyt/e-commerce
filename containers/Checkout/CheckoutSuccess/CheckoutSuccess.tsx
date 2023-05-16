import Icon from "@/components/Icon/Icon";
import { successOrder } from "@/statics";
import { Box, Button, Center, Heading, Stack } from "@chakra-ui/react";
import { memo } from "react";

const CheckoutSuccess: React.FC = (): JSX.Element => {
  return (
    <Box minH={500}>
      <Center>
        <Icon name={successOrder} isSimple size={300} />
      </Center>
      <Box
        bg="white"
        w="500px"
        h={"72"}
        left="433px"
        pos="absolute"
        bottom={0}
        roundedTop="2xl"
        boxShadow="sm"
      >
        <Heading px={10} mt={6} textAlign="center">
          Order Placed Successfully
        </Heading>

        <Box mt={6} textAlign="center" color=" rgba(5, 5, 5, 0.5);">
          You will recieve an email confirmation
        </Box>
        <Center mt={16}>
          <Stack w="full" px={6}>
            <Button rounded="full" size="lg" color="white" bg="#9747FF">
              See Order details
            </Button>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};

export default memo(CheckoutSuccess);
