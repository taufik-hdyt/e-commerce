import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

const Register: React.FC = (): JSX.Element => {
  return (
    <Box pt={20}>
      <Heading size="lg">Register</Heading>
      <Stack mt={6} spacing={10}>
        <Stack>
          <Input size="lg" variant="filled" bg="white" placeholder="Nama" />
          <Input
            type="email"
            size="lg"
            variant="filled"
            bg="white"
            placeholder="Email"
          />
          <Input
            type="number"
            size="lg"
            variant="filled"
            bg="white"
            placeholder="No Hp"
          />
          <Input
            type="password"
            size="lg"
            variant="filled"
            bg="white"
            placeholder="Password"
          />
        </Stack>

        <Box>
          <Button rounded="full" bg="primary" color="white" size="lg" w="full">
            Register
          </Button>
          <Flex mt={3} gap={2} fontSize="sm">
            have an Account ?
            <Link href="/login">
              <Text fontWeight="bold">Login</Text>
            </Link>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
export default memo(Register);
