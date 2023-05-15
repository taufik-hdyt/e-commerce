import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { memo, useState, useEffect } from "react";

const AfterLogin: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Heading as="h2" size="lg" mt={20}>
        Tell us About yourself
      </Heading>

      <Box mt={10} fontWeight="semibold">
        Who do you shop for ?
      </Box>

      <Flex mt={4} justify="space-between" gap={4}>
        <Button rounded="full" bg="#9747FF" color="white" size="lg" w="full">
          Men
        </Button>
        <Button rounded="full" bg="white" size="lg" w="full">
          Women
        </Button>
      </Flex>

      <Box>
        <Box mt={10} fontWeight="semibold">
          How Old are you ?
        </Box>
        <Select
          rounded="full"
          size="lg"
          mt={4}
          bg="white"
          variant="filled"
          placeholder="Age Range"
        >
          <option value="option1">Option 1</option>
        </Select>
      </Box>
    </Box>
  );
};

export default memo(AfterLogin);
