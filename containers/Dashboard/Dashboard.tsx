import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  LinkBox,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import ItemCategory from "./Partials/ItemCategory";
import ItemProduct from "@/components/ItemProduct";
import TextLink from "@/components/TextLink";
import NextLink from "next/link";

const Dashboard: FC = (): JSX.Element => {
  return (
    <Box mt={10} pb={20}>
      <Box>
        <HStack align="end" spacing="auto">
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

        <HStack mt={6} spacing={4}>
          <ItemCategory image="example.jpg" name="Clothing" />
          <ItemCategory image="example.jpg" name="Accecoris" />
          <ItemCategory image="example.jpg" name="Beauty" />
          <ItemCategory image="example.jpg" name="Shoes" />
        </HStack>
      </Box>

      <Box mt={"14"}>
        <HStack align="end" spacing="auto" mt={8}>
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
        <HStack align="center" mt={6} overscrollX="auto">
          <ItemProduct name="Taufik" image="/example.jpg" price={24.5} />
          <ItemProduct name="Hidayat" image="/example.jpg" price={24.5} />
        </HStack>
      </Box>

      <Box>
        <HStack spacing="auto" mt={8}>
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
        <HStack align="center" mt={6} overscrollX="auto">
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
          <ItemProduct name="Hidayat" image="example.jpg" price={24.5} />
        </HStack>
      </Box>

      {/* ================================ */}
    </Box>
  );
};
export default Dashboard;
