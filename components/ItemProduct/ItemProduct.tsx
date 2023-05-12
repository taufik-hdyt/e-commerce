import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  name: string;
  image: string;
  price: number;
}
const ItemProduct: FC<IProps> = ({ image, name, price }): JSX.Element => {
  return (
    <Box bg="white" w="full" h="270px" rounded="lg">
      <Image
        roundedTop="lg"
        backgroundSize="cover"
        src={image}
        alt="Dan Abramov"
      />
      <Box p="2">
        <Text>{name}</Text>
        <Text color="#9747FF" fontWeight="bold">
          ${price}
        </Text>
      </Box>
    </Box>
  );
};
export default ItemProduct;
