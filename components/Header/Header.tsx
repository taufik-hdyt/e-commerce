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
import { headerStyled } from "./Header.styles";

interface IProps {
  pageTitle?: string;
  isNoHeader?: boolean;
  isNavbarTop?: boolean;
}
const Header: FC<IProps> = ({
  pageTitle,
  isNoHeader,
  isNavbarTop,
}): JSX.Element => {
  return (
    <>
      {!isNoHeader && (
        <Box {...headerStyled}>
          {isNavbarTop && (
            <HStack spacing="auto" px={8}>
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
            <Box px={8} pt={2}>
              <Heading fontSize="3xl" fontWeight="bold">
                {pageTitle}
              </Heading>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};
export default Header;
