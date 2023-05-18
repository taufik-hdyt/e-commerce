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
} from "@chakra-ui/react";
import { memo } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children?: any;
  title?: string;
  isNoClose?: boolean;
}
const Drawerr: React.FC<IProps> = ({
  onClose,
  isOpen,
  children,
  title,
  isNoClose,
}): JSX.Element => {
  return (
    <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay
        maxW="500px"
        h="100vh"
        zIndex={10}
        left="50%"
        transform="translate(-50%)"
      />
      <DrawerContent mx="auto" roundedTop="2xl" maxW="500px !important">
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
