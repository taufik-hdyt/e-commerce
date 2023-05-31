import { Box, Center, HStack, Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import BackButton from '@/components/BackButton';
import Search from '@/components/Search';
import { useAction } from './Category.action';
import ItemLabel from '@/components/ItemLabel';
import { CategoryProps } from './Category.types';
import { useRouter } from 'next/router';
import { formatParams } from '@/helpers/url-formatter';
import Empty from '@/components/Empty';
import { searchEmpty } from '@/statics';

const Category: FC<CategoryProps> = ({ params }): JSX.Element => {
  const { category } = useAction(params);
  const router = useRouter();

  function onSearch(value: string): void {
    if (!params) return;
    params.search = value;
    router.push(formatParams(params)).then();
  }

  return (
    <Box pt={4} px={4}>
      <HStack>
        <BackButton link="/" />
        <Search
          title="Search"
          onSearch={onSearch}
          onClear={() => onSearch('')}
        />
      </HStack>
      <Box mt={10}>
        {category && <Heading size="lg">Shop by Categories</Heading>}
        <VStack mt={8} align="start">
          {category &&
            category?.map((e) => (
              <ItemLabel
                key={e?.id}
                image={e?.icon}
                description={e?.description}
                name={e?.name}
              />
            ))}

          {!category && (
            <Center h="70vh">
              <Empty
                buttonName="Explore Categories"
                titleEmpty="Sorry, we couldn't find any matching result for your Search."
                iconEmpty={searchEmpty}
                link="category"
              />
            </Center>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default Category;
