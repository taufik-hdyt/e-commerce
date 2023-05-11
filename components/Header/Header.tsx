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
import { FiChevronLeft } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";

import NextLink from "next/link";

interface IProps {
  isBack?: boolean;
  pageTitle?: string;
  isNoHeader?: boolean;
  isOrders?: boolean;
  isSearch?: boolean;
  link?: string;
}
const Header: FC<IProps> = ({
  pageTitle,
  isNoHeader,
  isOrders,
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

      {pageTitle && (
        <Heading fontSize="3xl" fontWeight="bold">
          {pageTitle}
        </Heading>
      )}
    </Box>
  );
};
export default Header;
