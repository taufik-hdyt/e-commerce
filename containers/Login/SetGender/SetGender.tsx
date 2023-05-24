import NavbarAction from '@/components/NavbarAction';
import { useAuth } from '@/hooks/useAuth';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { memo, useState, FormEvent, useEffect } from 'react';

const SetGender: React.FC = (): JSX.Element => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleGenderSelection = (gender: any) => {
    setSelectedGender(gender);
  };
  const router = useRouter();
  const toast = useToast();

  console.log({ gender, age });
  const { token } = useAuth();

  const update = (e: FormEvent) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    e.preventDefault();
    console.log(update);
    setLoading(true);
    axios
      .put(
        `api/users/set-gender`,
        {
          gender,
          age,
        },
        {
          ...config,
        },
      )
      .then(function (response) {
        router.push('/');
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
    <form onSubmit={update}>
      <Box pt={20}>
        <Box px={4}>
          <Heading as="h2" size="lg">
            Tell us About yourself
          </Heading>

          <Box mt={10} fontWeight="semibold">
            Who do you shop for ?
          </Box>

          <Flex mt={4} justify="space-between" gap={4}>
            <Button
              onClick={() => {
                handleGenderSelection('Men');
                setGender('Men');
              }}
              value={gender}
              rounded="full"
              bg={selectedGender === 'Men' ? 'primary' : 'white'}
              color={selectedGender === 'Men' ? 'white' : ''}
              size="lg"
              w="full"
            >
              Men
            </Button>
            <Button
              onClick={() => {
                handleGenderSelection('Women');
                setGender('Women');
              }}
              value={gender}
              bg={selectedGender === 'Women' ? 'primary' : 'white'}
              color={selectedGender === 'Women' ? 'white' : ''}
              rounded="full"
              size="lg"
              w="full"
            >
              Women
            </Button>
          </Flex>

          <Box>
            <Box mt={10} fontWeight="semibold">
              How Old are you ?
            </Box>

            <Input
              mt={4}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              rounded="full"
              size="lg"
              type="number"
              bg="white"
              variant="filled"
              placeholder="Age"
            />
          </Box>
        </Box>

        <NavbarAction>
          <Center h="full">
            <Button
              rounded="full"
              bg="primary"
              color="white"
              maxW="100vw"
              w="full"
              size="lg"
              type="submit"
            >
              Finish
            </Button>
          </Center>
        </NavbarAction>
      </Box>
    </form>
  );
};

export default memo(SetGender);
