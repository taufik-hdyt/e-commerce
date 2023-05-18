import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo } from "react";

interface IProps {
  onContinue?: () => void;
}
const ResetPassword: React.FC<IProps> = ({ onContinue }): JSX.Element => {
  return (
    <Box>
      <Heading size="lg" mt={10}>
        Forgot Password
      </Heading>
      <Box mt={6}>
        <Input
          size="lg"
          variant="filled"
          bg="white"
          placeholder="Enter Email Address"
        />
        <Button
          rounded="full"
          bg="primary"
          color="white"
          mt={6}
          size="lg"
          w="full"
          onClick={onContinue}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default memo(ResetPassword);
