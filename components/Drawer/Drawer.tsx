import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import { memo } from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children?: any;
  title?: string;
  isNoClose?: boolean;
  isOfferlay?: boolean;
}
const Drawerr: React.FC<IProps> = ({
  onClose,
  isOpen,
  children,
  title,
  isNoClose,
  isOfferlay,
}): JSX.Element => {
  return (
    <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
      {isOfferlay && (
        <DrawerOverlay
          maxW="500px"
          h="100vh"
          zIndex={10}
          left="50%"
          transform="translate(-50%)"
        />
      )}
      <DrawerContent
        minH="50vh"
        mx="auto"
        roundedTop="2xl"
        maxW="500px !important"
      >
        {!isNoClose && <DrawerCloseButton />}
        <DrawerHeader
          borderBottom="none"
          textAlign="center"
          borderBottomWidth="1px"
        >
          {title}
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default memo(Drawerr);
