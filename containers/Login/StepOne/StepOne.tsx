import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo } from "react";
import SocialLogin from "../Partials/SocialLogin";
import { apple, facebook, google } from "@/statics";

interface IProps {
  onContinue?: () => void;
}
const StepOne: React.FC<IProps> = ({ onContinue }): JSX.Element => {
  return (
    <Box>
      <Heading size="lg" mt={10}>
        Sign in
      </Heading>
      <Box mt={6}>
        <Input
          size="lg"
          variant="filled"
          bg="white"
          placeholder="Email Address"
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
        <Flex mt={3} gap={2} fontSize="sm">
          Dont have an Account ? <Box fontWeight="bold"> Create One</Box>
        </Flex>

        <Stack mt={16}>
          <SocialLogin icon={apple} name="Apple" />
          <SocialLogin icon={facebook} name="Facebook" />
          <SocialLogin icon={google} name="Google" />
        </Stack>
      </Box>
    </Box>
  );
};

export default memo(StepOne);
