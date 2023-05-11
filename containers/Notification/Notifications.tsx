import Icon from "@/components/Icon";
import { notif, notifEmpty } from "@/statics";
import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import NotifItem from "./Partials/NotifItem";
import Empty from "@/components/Empty";

const Notifications: React.FC = (): JSX.Element => {
  return (
    <Box h="550px">
      <VStack mt={10}>
        <NotifItem />
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
