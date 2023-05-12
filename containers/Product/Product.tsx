import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";
import ItemProduct from "@/components/ItemProduct";
import Search from "@/components/Search";
import { filter } from "@/statics";
import { Box, Button, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import { memo } from "react";
import { FiChevronDown } from "react-icons/fi";

const Product: React.FC = (): JSX.Element => {
  return (
    <Box>
      <HStack>
        <BackButton />
        <Search />
      </HStack>

      <HStack mt={6}>
        <Button bg="#9747FF" rounded="full" gap={2} color="white">
          <Icon name={filter} size={20} isStroke color="white" />
          <Box>2</Box>
        </Button>
        <Button bg="white" rounded="full" gap={2}>
          On Sale
        </Button>
        <Button bg="#9747FF" rounded="full" gap={2} color="white">
          <Box>Price</Box>
          <FiChevronDown />
        </Button>
        <Button bg="white" rounded="full" gap={2}>
          <Box>Sort by</Box>
          <FiChevronDown />
        </Button>
        <Button bg="#9747FF" rounded="full" gap={2} color="white">
          <Box>Women</Box>
          <FiChevronDown />
        </Button>
      </HStack>

      <Box fontWeight="semibold" mt={6}>
        53 Results Found
      </Box>

      <Grid
        pb={20}
        overflowY="auto"
        gridTemplateColumns="1fr 1fr"
        gap={4}
        mt={4}
      >
        <GridItem>
          <ItemProduct
            name="Hidayat"
            image="https://bit.ly/dan-abramov"
            price={24.5}
          />
        </GridItem>
        <GridItem>
          <ItemProduct
            name="Hidayat"
            image="https://bit.ly/dan-abramov"
            price={24.5}
          />
        </GridItem>
        <GridItem>
          <ItemProduct
            name="Hidayat"
            image="https://bit.ly/dan-abramov"
            price={24.5}
          />
        </GridItem>
        <GridItem>
          <ItemProduct
            name="Hidayat"
            image="https://bit.ly/dan-abramov"
            price={24.5}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default memo(Product);
