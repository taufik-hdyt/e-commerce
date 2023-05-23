import { memo } from 'react';
import Icon from '@/components/Icon';
import { notif, notifNew } from '@/statics';
import { Box, HStack, Text } from '@chakra-ui/react';
import { color } from 'framer-motion';
import Empty from '@/components/Empty';

const NotifItem: React.FC = (): JSX.Element => {
  return (
    <Box
      px={4}
      py={6}
      w="full"
      bg="white"
      rounded="lg"
      _hover={{ bg: 'primary', color: 'white' }}
    >
      <HStack align="center" h="full" spacing={6}>
        <Box p={3} rounded="full" bg="#E5D8F6">
          <Icon name={notifNew} isStroke color="#9747FF" size={30} />
        </Box>
        <Text fontWeight="semibold">
          Jasmine, you placed and order check your order history for full
          details
        </Text>
      </HStack>
    </Box>
  );
};

export default memo(NotifItem);
