import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import ItemCategory from "./Partials/ItemCategory";
import BackButton from "@/components/BackButton";
import Search from "@/components/Search";

const Category: FC = (): JSX.Element => {
  return (
    <Box pt={4}>
      <HStack>
        <BackButton link="/" />
        <Search />
      </HStack>
      <Box mt={10}>
        <Heading size="lg">Shop by Categories</Heading>

        <VStack mt={8} align="start">
          <ItemCategory image="https://bit.ly/dan-abramov" name="Clothing" />
          <ItemCategory image="https://bit.ly/dan-abramov" name="Accessories" />
          <ItemCategory image="https://bit.ly/dan-abramov" name="Beauty" />
        </VStack>
      </Box>
    </Box>
  );
};

export default Category;
