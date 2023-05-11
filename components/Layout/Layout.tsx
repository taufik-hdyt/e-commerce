import { Box, Container, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { ILayout } from "./Layout.types";
import Header from "../Header";
import Navbar from "../Navbar";

const Layout: FC<ILayout> = ({
  children,
  isNoHeader,
  menuSelected,
  pageTitle,
}): JSX.Element => {
  return (
    <Box bg="#F5F5F5" maxWidth={500} mx="auto">
      <Box px={8}>
        <Header isNoHeader={isNoHeader} pageTitle={pageTitle} />
        <Container px={0}>{children}</Container>
      </Box>
      <Navbar menuSelected={menuSelected} />
    </Box>
  );
};

export default Layout;
