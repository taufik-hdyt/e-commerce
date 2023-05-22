import { Box, Flex, HStack, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import ItemCategory from './Partials/ItemCategory';
import ItemProduct from '@/components/ItemProduct';
import NextLink from 'next/link';
import Link from 'next/link';

const Dashboard: FC = (): JSX.Element => {
  return (
    <Box py={20}>
      <Box>
        <HStack px={4} align="end" spacing="auto">
          <Heading size="lg">Shop by Categories</Heading>
          <Text
            as={NextLink}
            href="/category"
            fontSize="lg"
            fontWeight="semibold"
          >
            See All
          </Text>
        </HStack>

        <Flex
          px={4}
          gap="4"
          mt={6}
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <ItemCategory image="example.jpg" name="Clothing" />
          <ItemCategory image="example.jpg" name="Accecoris" />
          <ItemCategory image="example.jpg" name="Beauty" />
          <ItemCategory image="example.jpg" name="Beauty" />
          <ItemCategory image="example.jpg" name="Beauty" />
          <ItemCategory image="example.jpg" name="Beauty" />
          <ItemCategory image="example.jpg" name="Beauty" />
          <ItemCategory image="example.jpg" name="Beauty" />
        </Flex>
      </Box>

      <Box mt={'14'}>
        <HStack px={4} align="end" spacing="auto" mt={8}>
          <Heading size="lg">Top Selling</Heading>
          <Text
            as={NextLink}
            href="/product"
            fontSize="lg"
            fontWeight="semibold"
          >
            See All
          </Text>
        </HStack>
        <Link href="/product/a">
          <Flex px={4} gap={4} mt={6} overflowX="auto">
            <ItemProduct name="Taufik" image="/example.jpg" price={24.5} />
            <ItemProduct name="Hidayat" image="/example.jpg" price={24.5} />
            <ItemProduct name="Hidayat" image="/example.jpg" price={24.5} />
            <ItemProduct name="Hidayat" image="/example.jpg" price={24.5} />
            <ItemProduct name="Hidayat" image="/example.jpg" price={24.5} />
            <ItemProduct name="Hidayat" image="/example.jpg" price={24.5} />
          </Flex>
        </Link>
      </Box>

      <Box>
        <HStack spacing="auto" mt={8} px={4}>
          <Heading size="lg">Ready to Wear</Heading>
          <Text
            as={NextLink}
            href="/category"
            fontSize="lg"
            fontWeight="semibold"
          >
            See All
          </Text>
        </HStack>
        <Flex px={4} gap={4} overflowX="auto" mt={6}>
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
        </Flex>
      </Box>

      {/* ================================ */}
    </Box>
  );
};
export default Dashboard;
