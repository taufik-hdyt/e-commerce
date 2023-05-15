import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo } from "react";

interface IProps {
  resetPassword?: () => void;
}
const StepTwo: React.FC<IProps> = ({ resetPassword }): JSX.Element => {
  return (
    <Box>
      <Heading size="lg" mt={10}>
        Sign in
      </Heading>
      <Box mt={6}>
        <Input size="lg" variant="filled" bg="white" placeholder="Password" />
        <Button
          rounded="full"
          bg="#9747FF"
          color="white"
          mt={6}
          size="lg"
          w="full"
        >
          Continue
        </Button>
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
