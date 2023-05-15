import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";

import { payment, rightArrow } from "@/statics";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";

const AddPayment: React.FC = (): JSX.Element => {
  return (
    <Box>
      <BackButton link="/profile" />
      <Heading mt={2} fontSize="3xl" fontWeight="bold">
        Add Card
      </Heading>
      <Stack mt={10} spacing={4}>
        <Input
          variant="filled"
          size="lg"
          bg="white"
          placeholder="Card Number"
        />

        <Flex gap={6}>
          <Input variant="filled" size="lg" bg="white" placeholder="CCV" />
          <Input variant="filled" size="lg" bg="white" placeholder="Exp" />
        </Flex>
      </Stack>
    </Box>
  );
};

export default memo(AddPayment);
