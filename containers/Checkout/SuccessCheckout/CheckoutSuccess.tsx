import Icon from "@/components/Icon/Icon";
import { successOrder } from "@/statics";
import { Box, Center, Stack } from "@chakra-ui/react";
import { memo } from "react";

const CheckoutSuccess: React.FC = (): JSX.Element => {
  return (
    <Box minH={900} bg="#9747FF">
      <Center>
        <Icon name={successOrder} isSimple size={300} />
      </Center>
    </Box>
  );
};

export default memo(CheckoutSuccess);
