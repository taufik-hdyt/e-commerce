import { Box, Button, Flex, HStack, Heading, Text } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import ItemProduct from '@/components/ItemProduct';
import NextLink from 'next/link';
import Link from 'next/link';
import { useAction } from './Dashboard.action';
import ItemLabel from './Partials/ItemLabel';

const Dashboard: FC = (): JSX.Element => {
  const { category, getDataCategory } = useAction();
  useEffect(() => {
    getDataCategory();
  }, [getDataCategory]);
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
          {category?.map((e) => {
            return <ItemLabel key={e.id} icon={e.icon} name={e.name} />;
          })}
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
    </Box>
  );
};
export default Dashboard;
