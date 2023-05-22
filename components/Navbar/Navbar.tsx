import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import { memo } from "react";
import { navbarStyled } from "./Navbar.styled";

import Icon from "../Icon/Icon";
import { home, notif, orders, profile } from "@/statics";
import NavbarItem from "./Partials/NavbarItem";
import { INavbar } from "./NavbarItem.types";

const Navbar: React.FC<INavbar> = ({ menuSelected, addToBag }): JSX.Element => {
  return (
    <Box {...navbarStyled}>
      {menuSelected && (
        <HStack h="full" w="full" spacing="auto" px="4">
          <NavbarItem
            icon={home}
            link="/"
            isSelected={menuSelected === "home"}
            isAnchor={false}
          />
          <NavbarItem
            icon={notif}
            link="/notifications"
            isSelected={menuSelected === "notifications"}
            isAnchor={false}
          />
          <NavbarItem
            icon={orders}
            link="/orders"
            isSelected={menuSelected === "orders"}
            isAnchor={false}
          />
          <NavbarItem
            icon={profile}
            link="/profile"
            isSelected={menuSelected === "profile"}
            isAnchor={false}
          />
        </HStack>
      )}
    </Box>
  );
};

export default memo(Navbar);
