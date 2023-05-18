import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";
import ItemProduct from "@/components/ItemProduct";
import Search from "@/components/Search";
import { filter } from "@/statics";
import { Box, Button, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";
import { FiChevronDown } from "react-icons/fi";

const Product: React.FC = (): JSX.Element => {
  return (
    <Box pt={4}>
      <HStack>
        <BackButton link="/" />
        <Search />
      </HStack>

      <Flex overflow="auto" mt={6}>
        <Box display="flex" gap={2}>
          <Button bg="primary" rounded="full" gap={2} color="white">
            <Icon name={filter} size={20} isStroke color="white" />
            <Box>2</Box>
          </Button>
          <Button bg="white" rounded="full" gap={2}>
            On Sale
          </Button>
          <Button bg="primary" rounded="full" gap={2} color="white">
            <Box>Price</Box>
            <FiChevronDown />
          </Button>
          <Button bg="white" rounded="full" gap={2}>
            <Box>Sort by</Box>
            <FiChevronDown />
          </Button>
          <Button bg="primary" rounded="full" gap={2} color="white">
            <Box>Women</Box>
            <FiChevronDown />
          </Button>
        </Box>
      </Flex>

      <Box fontWeight="semibold" mt={6}>
        53 Results Found
      </Box>

      <Grid
        h="70vh"
        overflowY="auto"
        mt={4}
        gridTemplateColumns="1fr 1fr"
        gap={4}
        pb={4}
      >
        <ItemProduct
          productWidth
          name="Hidayat"
          image="https://bit.ly/dan-abramov"
          price={24.5}
        />
        <ItemProduct
          productWidth
          name="Hidayat"
          image="https://bit.ly/dan-abramov"
          price={24.5}
        />
        <ItemProduct
          productWidth
          name="Hidayat"
          image="https://bit.ly/dan-abramov"
          price={24.5}
        />
        <ItemProduct
          productWidth
          name="Hidayat"
          image="https://bit.ly/dan-abramov"
          price={24.5}
        />
        <ItemProduct
          productWidth
          name="Hidayat"
          image="https://bit.ly/dan-abramov"
          price={24.5}
        />
        <ItemProduct
          productWidth
          name="Hidayat"
          image="https://bit.ly/dan-abramov"
          price={24.5}
        />
      </Grid>
    </Box>
  );
};

export default memo(Product);
