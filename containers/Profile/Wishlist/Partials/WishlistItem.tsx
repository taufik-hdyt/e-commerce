import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon/Icon";
import { heart, rightArrow } from "@/statics";
import { Box, HStack, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

interface IProps {
  name?: string;
  qty?: number;
}
const WishlistItem: React.FC<IProps> = ({ name, qty }): JSX.Element => {
  return (
    <Stack as={Link} href="/wishlist/a">
      <Box
        p={4}
        bg="white"
        w="full"
        rounded="lg"
        _hover={{ bg: "primary", color: "white" }}
      >
        <HStack>
          <HStack spacing={4}>
            <Box bg="#E5D8F6" p={2.5} rounded="full">
              <Icon isStroke color="primary" name={heart} size={30} />
            </Box>
            <Stack spacing={0}>
              <Text fontSize="xl" fontWeight="bold">
                {name}
              </Text>
              <Text color="rgba(5, 5, 5, 0.5);">{qty} Products</Text>
            </Stack>
          </HStack>
          <Spacer />
          <Icon name={rightArrow} isStroke size={20} />
        </HStack>
      </Box>
    </Stack>
  );
};

export default memo(WishlistItem);
