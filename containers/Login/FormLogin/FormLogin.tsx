import { Box, Button, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { memo } from 'react';
import SocialLogin from '../Partials/SocialLogin';
import { apple, facebook, google } from '@/statics';

interface IProps {
  onContinue?: () => void;
  email?: string;
  password?: string;
  setEmail?: any;
  setPassword?: any;
  loading?: boolean;
}
const FormLogin: React.FC<IProps> = ({
  onContinue,
  email,
  password,
  loading,
  setEmail,
  setPassword,
}): JSX.Element => {
  return (
    <Box pt={20}>
      <Heading size="lg">Sign in</Heading>
      <Box mt={6}>
        <Stack>
          <Input
            value={email}
            size="lg"
            variant="filled"
            bg="white"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            size="lg"
            variant="filled"
            bg="white"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <Button
          rounded="full"
          bg="primary"
          color="white"
          mt={6}
          size="lg"
          w="full"
          type="submit"
          isLoading={loading}
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

export default memo(FormLogin);
