import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { memo, useState } from 'react';
import SocialLogin from '../SocialLogin';
import { apple, facebook, google } from '@/statics';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
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
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password}
              size="lg"
              variant="filled"
              bg="white"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <InputRightElement cursor="pointer" h="full">
              {password && (
                <IconButton
                  aria-label="show password"
                  onClick={handleTogglePassword}
                  variant="unstyled"
                  icon={
                    showPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )
                  }
                />
              )}
            </InputRightElement>
          </InputGroup>
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
          Dont have an Account ?
          <Link href="/register">
            <Text fontWeight="bold">Create One</Text>
          </Link>
        </Flex>

        <Stack mt={16}>
          <SocialLogin icon={apple} name="Apple" />
          <SocialLogin icon={google} name="Google" />
          <SocialLogin icon={facebook} name="Facebook" />
        </Stack>
      </Box>
    </Box>
  );
};

export default memo(FormLogin);
