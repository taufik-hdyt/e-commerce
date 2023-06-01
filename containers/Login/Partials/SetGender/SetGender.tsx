import NavbarAction from '@/components/NavbarAction';
import { Box, Button, Center, Flex, Heading, Input } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { useAction } from './SetGender.action';

const SetGender: React.FC = (): JSX.Element => {
  const { loading, setAge, setGender, update, age, gender } = useAction();

  const [selectedGender, setSelectedGender] = useState(null);
  const handleGenderSelection = (gender: any) => {
    setSelectedGender(gender);
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
              isLoading={loading}
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
