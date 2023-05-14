import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

interface IProps {
  name?: string;
  image?: string;
}
const ItemCategory: React.FC<IProps> = ({ image, name }): JSX.Element => {
  return (
    <Box
      h={100}
      w="full"
      bg="white"
      rounded="lg"
      _hover={{ bg: "#9747FF", color: "white" }}
    >
      <HStack align="center" h="full" px={4} spacing={4}>
        <Image w={70} rounded="full" src={image} alt="name" />
        <Text fontWeight="semibold">{name}</Text>
      </HStack>
    </Box>
  );
};
export default memo(ItemCategory);
