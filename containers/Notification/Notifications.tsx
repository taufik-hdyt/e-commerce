import Icon from '@/components/Icon';
import { notif, notifEmpty } from '@/statics';
import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { memo } from 'react';
import NotifItem from './Partials/NotifItem';
import Empty from '@/components/Empty';

const Notifications: React.FC = (): JSX.Element => {
  return (
    <Box pt={2} px={4}>
      <Heading as="h2" size="lg">
        Notifications
      </Heading>
      <VStack mt={10}>
        <NotifItem />
        <NotifItem />
      </VStack>
      {/* <Center h="full">
        <Empty
          buttonName="Explore Categories"
          titleEmpty="No Notification yet"
          iconEmpty={notifEmpty}
        />
      </Center> */}
    </Box>
  );
};
export default memo(Notifications);
