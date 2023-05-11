import { Box, Container, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { ILayout } from "./Layout.types";
import Header from "../Header";
import Navbar from "../Navbar";

const Layout: FC<ILayout> = ({
  children,
  isBack,
  isNoHeader,
  isNotification,
  menuSelected,
  isOrders,
  isSearch,
  link,
}): JSX.Element => {
  return (
    <Box bg="#F5F5F5" maxWidth={500} mx="auto">
      <Box px={8}>
        <Header
          isBack={isBack}
          isNoHeader={isNoHeader}
          isNotification={isNotification}
          isOrders={isOrders}
          isSearch={isSearch}
          link={link}
        />
        <Container px={0}>{children}</Container>
      </Box>
      <Navbar menuSelected={menuSelected} />
    </Box>
  );
};

export default Layout;
