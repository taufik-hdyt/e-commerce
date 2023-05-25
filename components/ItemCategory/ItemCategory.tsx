import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

interface IProps {
  name?: string;
  image?: string;
  description?: string;
  bg?: string;
}
const ItemCategory: React.FC<IProps> = ({
  image,
  name,
  description,
  bg,
}): JSX.Element => {
  return (
    <Box
      h={100}
      w="full"
      bg={bg ? bg : 'white'}
      rounded="lg"
      _hover={{ bg: 'primary', color: 'white' }}
    >
      <Link href="/product">
        <HStack align="center" h="full" px={4} spacing={4}>
          <Image w={70} rounded="full" src={image} alt="name" />
          <Box>
            <Text fontWeight="semibold">{name}</Text>
            <Text fontSize="sm">{description}</Text>
          </Box>
        </HStack>
      </Link>
    </Box>
  );
};
export default memo(ItemCategory);
