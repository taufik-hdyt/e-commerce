import BackButton from "@/components/BackButton";
import { navbarStyled } from "@/components/Navbar/Navbar.styled";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import AddressItem from "./Partials/AddressItem";

const Address: React.FC = (): JSX.Element => {
  return (
    <Stack minH="95vh" spacing="auto" pt={4}>
      <AddressItem />
      {/* <AddAddress /> */}
    </Stack>
  );
};

export default memo(Address);
