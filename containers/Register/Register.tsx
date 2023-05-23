import FormControlComponent from '@/components/FormControl/FormControl';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useState, FormEvent } from 'react';
import axios from 'axios';

const Register: React.FC = (): JSX.Element => {
  const [name, SetName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [noHp, setNoHp] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const register = (e: FormEvent) => {
    e.preventDefault();
    console.log(register);
    setLoading(true);

    axios
      .post(`/api/users/register`, {
        name: name,
        email: email,
        password: password,
        phone_number: noHp,
        gender: gender,
      })
      .then(function (response) {
        router.push('/login');
        toast({
          title: response.data.message,
          status: 'success',
          isClosable: true,
          position: 'top',
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: error.response.data.message,
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box pt={20} px={4}>
      <Heading size="lg">Register</Heading>
      <Stack mt={6} spacing={8}>
        <form onSubmit={register}>
          <VStack>
            <Input
              value={name}
              size="lg"
              variant="filled"
              bg="white"
              placeholder="Nama"
              onChange={(e) => SetName(e.target.value)}
            />
            <Input
              type="email"
              size="lg"
              variant="filled"
              bg="white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="number"
              size="lg"
              variant="filled"
              bg="white"
              placeholder="No Hp"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
            />
            <Input
              type="password"
              size="lg"
              variant="filled"
              bg="white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Select
              variant="filled"
              bg="white"
              size="lg"
              placeholder="Select Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Male</option>
              <option>Female</option>
            </Select>
          </VStack>

          <Box mt={6}>
            <Button
              isLoading={loading}
              type="submit"
              rounded="full"
              bg="primary"
              color="white"
              size="lg"
              w="full"
            >
              Register
            </Button>

            <Flex mt={3} gap={2} fontSize="sm">
              have an Account ?
              <Link href="/login">
                <Text fontWeight="bold">Login</Text>
              </Link>
            </Flex>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};
export default memo(Register);
