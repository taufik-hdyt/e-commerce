import { Box, HStack, Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import ItemCategory from './Partials/ItemCategory';
import BackButton from '@/components/BackButton';
import Search from '@/components/Search';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ICategory } from './Category.types';
import { useAuth } from '@/hooks/useAuth';
import { useAction } from './Category.action';

const Category: FC = (): JSX.Element => {
  const { category } = useAction();
  return (
    <Box pt={4} px={4}>
      <HStack>
        <BackButton link="/" />
        <Search />
      </HStack>
      <Box mt={10}>
        <Heading size="lg">Shop by Categories</Heading>

        <VStack mt={8} align="start">
          {category?.map((e) => {
            return (
              <ItemCategory
                key={e.id}
                image="https://bit.ly/dan-abramov"
                name={e.name}
              />
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
};

export default Category;
