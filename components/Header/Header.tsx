import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { FC } from "react";

import { BiShoppingBag } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";
import { FiChevronLeft } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import NextLink from "next/link";

interface IProps {
  isBack?: boolean;
  isNotification?: boolean;
  isNoHeader?: boolean;
  isOrders?: boolean;
  isSearch?: boolean;
  link?: string;
}
const Header: FC<IProps> = ({
  isBack,
  isNotification,
  isNoHeader,
  isOrders,
  isSearch,
  link,
}): JSX.Element => {
  return (
    <Box pt={2}>
      {!isNoHeader && (
        <HStack spacing="auto">
          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
          <Button
            rounded="full"
            bg="white"
            fontWeight="bold"
            rightIcon={<VscChevronDown size={20} />}
          >
            Woman
          </Button>
          <Box w="50px" bg="#9747FF" rounded="full" h="50px">
            <Center h="full">
              <BiShoppingBag color="white" size={25} />
            </Center>
          </Box>
        </HStack>
      )}

      {isBack && (
        <HStack spacing="4">
          <Button
            as={NextLink}
            href={`/${link}`}
            px={2.5}
            py={6}
            aria-label="back"
            rounded="full"
            bg="white"
            fontWeight="bold"
          >
            <FiChevronLeft size={30} />
          </Button>
          {isSearch && (
            <InputGroup bg="white" rounded="full">
              <Input
                ml={5}
                type="text"
                variant="unstyled"
                py={3}
                placeholder="Seacrh"
              />

              <InputLeftElement ml={3} h="full">
                <RiSearch2Line size={25} />
              </InputLeftElement>

              <InputRightElement mr={2} h="full">
                <TiDeleteOutline size={30} cursor="pointer" />
              </InputRightElement>
            </InputGroup>
          )}
        </HStack>
      )}

      {isNotification && <Heading fontWeight="bold">Notifications</Heading>}
      {isOrders && <Heading fontWeight="bold">Orders</Heading>}
    </Box>
  );
};
export default Header;
