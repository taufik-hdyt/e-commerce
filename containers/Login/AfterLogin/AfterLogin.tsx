import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { memo, useState, useEffect } from "react";

const AfterLogin: React.FC = (): JSX.Element => {
  return (
    <Box pt={20}>
      <Heading as="h2" size="lg">
        Tell us About yourself
      </Heading>

      <Box mt={10} fontWeight="semibold">
        Who do you shop for ?
      </Box>

      <Flex mt={4} justify="space-between" gap={4}>
        <Button rounded="full" bg="primary" color="white" size="lg" w="full">
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

      <Box bg="white" w="full" h={70} left={0} pos="fixed" bottom={0}>
        <Center h="full">
          <HStack
            as={Link}
            href="/"
            w="34vw"
            bg="primary"
            justify="center"
            color="white"
            rounded="full"
            px={6}
            py={"1.5"}
          >
            <Button variant="unstyled">Finish</Button>
          </HStack>
        </Center>
      </Box>
    </Box>
  );
};

export default memo(AfterLogin);
