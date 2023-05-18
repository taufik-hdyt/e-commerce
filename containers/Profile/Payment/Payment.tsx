import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";
import { navbarStyled } from "@/components/Navbar/Navbar.styled";
import { payment, rightArrow } from "@/statics";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import PaymentCard from "./Partials/PaymentCard";
import AddPayment from "./Partials/AddPayment";

const Address: React.FC = (): JSX.Element => {
  return (
    <Stack minH="95vh" spacing="auto" pt={4}>
      <Box>
        {/* <PaymentCard /> */}
        <AddPayment />
      </Box>
    </Stack>
  );
};

export default memo(Address);
