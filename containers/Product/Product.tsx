import BackButton from '@/components/BackButton';
import Icon from '@/components/Icon';
import ItemProduct from '@/components/ItemProduct';
import Search from '@/components/Search';
import { filter, searchEmpty } from '@/statics';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react';
import { memo, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useProductAction } from './Product.action';
import { ProductProps } from './Product.types';
import { formatParams } from '@/helpers/url-formatter';
import { useRouter } from 'next/router';
import Empty from '@/components/Empty';
import Drawer from '@/components/Drawer/Drawer';
import { title } from 'process';
import FilterGender from './Partials/Filter/Age/FIlterGender';
import FilterPrice from './Partials/Filter/Price/FIlterPrice';
import FilterSortBy from './Partials/Filter/Sort By/FilterSortBy';

const Product: React.FC<ProductProps> = ({ params }): JSX.Element => {
  const {
    products,
    totalProduct,
    isOpenFilterGender,
    isOpenFilterPrice,
    isOpenFilterSortBy,
    onClose,
    onOpenFilterGender,
    onOpenFilterPrice,
    onOpenFilterSortBy,
  } = useProductAction(params);
  const router = useRouter();
  function onSearch(value: string): void {
    if (!params) return;
    params.search = value;
    router.push(formatParams(params)).then();
  }

  return (
    <Box pt={4}>
      <HStack px={4}>
        <BackButton link="/" />
        <Search
          title="Search"
          onSearch={onSearch}
          onClear={() => onSearch('')}
        />
      </HStack>

      <Flex overflowX="auto" mt={6}>
        <Box display="flex" gap={2} px={4}>
          <Button bg="primary" rounded="full" gap={2} color="white">
            <Icon name={filter} size={20} isStroke color="white" />
            <Box>2</Box>
          </Button>
          <Button bg="white" rounded="full" gap={2}>
            On Sale
          </Button>
          <Button
            onClick={onOpenFilterPrice}
            bg="primary"
            rounded="full"
            gap={2}
            color="white"
          >
            <Box>Price</Box>
            <FiChevronDown />
          </Button>
          <Button
            onClick={onOpenFilterSortBy}
            bg="white"
            rounded="full"
            gap={2}
          >
            <Box>Sort by</Box>
            <FiChevronDown />
          </Button>
          <Button
            onClick={onOpenFilterGender}
            bg="primary"
            rounded="full"
            gap={2}
            color="white"
          >
            <Box>Women</Box>
            <FiChevronDown />
          </Button>
        </Box>
      </Flex>

      {totalProduct && (
        <Box fontWeight="semibold" mt={6} px={4}>
          {totalProduct} Results Found
        </Box>
      )}

      <Grid
        h="70vh"
        overflowY="auto"
        mt={4}
        gridTemplateColumns={products ? '1fr 1fr' : '1fr'}
        gap={4}
        pb={4}
        px={4}
      >
        {products &&
          products?.map((e) => (
            <ItemProduct
              key={e?.id}
              image={e.image}
              price={e.price}
              name={e.name}
              slug={e.slug}
            />
          ))}
        {!products && (
          <Center h="70vh">
            <Empty
              buttonName="Explore Products"
              titleEmpty="Sorry, we couldn't find any matching result for your Search."
              iconEmpty={searchEmpty}
              link="product"
            />
          </Center>
        )}
      </Grid>

      {isOpenFilterGender && (
        <FilterGender onClose={onClose} openFilterGender={isOpenFilterGender} />
      )}
      {isOpenFilterPrice && (
        <FilterPrice onClose={onClose} openFilterPrice={isOpenFilterPrice} />
      )}

      {isOpenFilterSortBy && (
        <FilterSortBy onClose={onClose} openFilterSortBy={isOpenFilterSortBy} />
      )}
    </Box>
  );
};

export default memo(Product);
