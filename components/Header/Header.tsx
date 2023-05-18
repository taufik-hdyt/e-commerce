import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { FC } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";
import { headerStyled } from "./Header.styles";
import Link from "next/link";

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
            <HStack boxShadow="sm" spacing="auto" py={3} px={4}>
              <Link href="/profile">
                <Avatar
                  name="Kola Tioluwani"
                  src="https://bit.ly/tioluwani-kolawole"
                />
              </Link>
              <Button
                rounded="full"
                bg="white"
                fontWeight="bold"
                rightIcon={<VscChevronDown size={20} />}
              >
                Woman
              </Button>
              <Link href="/cart">
                <IconButton
                  size="lg"
                  aria-label="cart"
                  bg="primary"
                  rounded="full"
                >
                  <Center h="full">
                    <BiShoppingBag color="white" size={25} />
                  </Center>
                </IconButton>
              </Link>
            </HStack>
          )}

          {pageTitle && (
            <Box px={4} pt={2}>
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
