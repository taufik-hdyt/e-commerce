import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  name?: string;
  image?: string;
  price?: number;
  productWidth?: boolean;
}
const ItemProduct: FC<IProps> = ({
  image,
  name,
  price,
  productWidth,
}): JSX.Element => {
  return (
    <Link href="/product/a">
      <Box bg="white" w={productWidth ? "auto" : "150px"} rounded="lg">
        <Image
          roundedTop="lg"
          backgroundSize="cover"
          src={image}
          alt="Dan Abramov"
        />
        <Box p="2">
          <Text fontWeight="semibold">{name}</Text>
          <Text color="primary" fontWeight="bold">
            Rp{price}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};
export default ItemProduct;
