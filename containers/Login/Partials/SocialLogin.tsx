import Icon from '@/components/Icon';
import { Box, Center, Flex } from '@chakra-ui/react';
import { memo } from 'react';

interface IProps {
  name: string;
  icon: string;
}
const SocialLogin: React.FC<IProps> = ({ icon, name }): JSX.Element => {
  return (
    <Flex
      cursor="pointer"
      rounded="full"
      bg="white"
      p={3.5}
      maxW="full"
      align="center"
      _hover={{ bg: 'primary', color: 'white' }}
    >
      <Icon isSimple name={icon} size={30} />

      <Box mx="auto" fontWeight="bold">
        Continue With {name}
      </Box>
    </Flex>
  );
};

export default memo(SocialLogin);
