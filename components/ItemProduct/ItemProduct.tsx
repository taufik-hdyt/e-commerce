import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface IProps {
  name?: string;
  image?: string;
  price?: number;
  productWidth?: boolean;
  slug?: string;
}
const ItemProduct: FC<IProps> = ({
  image,
  name,
  price,
  productWidth,
  slug,
}): JSX.Element => {
  return (
    <Link href={`product/${slug}`}>
      <Box bg="white" w={productWidth ? 'auto' : '200px'} rounded="lg">
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
