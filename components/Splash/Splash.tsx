import { Box, Center } from '@chakra-ui/react';
import Icon from '../Icon/Icon';
import { splash } from '@/statics';

const Splash: React.FC = (): JSX.Element => {
  return (
    <Box bg="#9747FF" h="100vh">
      <Center h="full">
        <Icon name={splash} size={150} isSimple />
      </Center>
    </Box>
  );
};

export default Splash;
