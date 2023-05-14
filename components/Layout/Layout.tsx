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
  isNavbarTop,
  addToBag,
}): JSX.Element => {
  return (
    <Box bg="#F5F5F5" minH={645} boxShadow="lg" maxWidth={500} mx="auto">
      <Header
        isNavbarTop={isNavbarTop}
        isNoHeader={isNoHeader}
        pageTitle={pageTitle}
      />

      <Box px={4} pt={4}>
        <Container px={0}>{children}</Container>
      </Box>
      <Navbar addToBag={addToBag} menuSelected={menuSelected} />
    </Box>
  );
};

export default Layout;
