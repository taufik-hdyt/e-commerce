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

      {/* {addToBag && (
        <Stack px={4} h="full">
          <Box mt="2" rounded="full" h={"14"} bg="#9747FF">
            <HStack px={6} h="full" spacing="auto">
              <Box fontWeight="bold" color="white">
                Rp1500
              </Box>
              <Button color="white" variant="unstyled">
                Add to Bag
              </Button>
            </HStack>
          </Box>
        </Stack>
      )} */}
    </Box>
  );
};

export default memo(Navbar);
