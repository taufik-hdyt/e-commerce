import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

interface IProps {
  resetPassword?: () => void;
}
const StepTwo: React.FC<IProps> = ({ resetPassword }): JSX.Element => {
  return (
    <Box pt={20}>
      <Heading size="lg">Sign in</Heading>
      <Box mt={6}>
        <Input
          type="password"
          size="lg"
          variant="filled"
          bg="white"
          placeholder="Password"
        />
        <Link href="/login/login-success">
          <Button
            rounded="full"
            bg="primary"
            color="white"
            mt={6}
            size="lg"
            w="full"
          >
            Continue
          </Button>
        </Link>
        <Flex mt={3} gap={2} fontSize="sm">
          Forgot Password ?{" "}
          <Box cursor="pointer" onClick={resetPassword} fontWeight="bold">
            Reset
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default memo(StepTwo);
