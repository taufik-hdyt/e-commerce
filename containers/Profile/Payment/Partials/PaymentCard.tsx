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

const PaymentCard: React.FC = (): JSX.Element => {
  return (
    <Box>
      <BackButton link="/profile" />
      <Heading mt={2} fontSize="3xl" fontWeight="bold">
        Payment
      </Heading>

      <Box mt={6} fontSize="lg" fontWeight="bold">
        Cards
      </Box>
      <HStack mt={4} spacing="auto" bg="white" py={6} px={4} rounded="lg">
        <Flex gap={4} align="center">
          <Text fontWeight="semibold">**** 4187</Text>
          <Icon name={payment} size={20} />
        </Flex>
        <Icon name={rightArrow} isSimple size={20} />
      </HStack>

      <Box mt={6} fontSize="lg" fontWeight="bold">
        Paypal
      </Box>
      <HStack mt={4} spacing="auto" bg="white" py={6} px={4} rounded="lg">
        <Text fontWeight="semibold">Cloth@gmail.com</Text>
        <Icon name={rightArrow} isSimple size={20} />
      </HStack>
    </Box>
  );
};

export default memo(PaymentCard);
