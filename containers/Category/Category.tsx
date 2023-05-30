import { Box, HStack, Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import BackButton from '@/components/BackButton';
import Search from '@/components/Search';
import { useAction } from './Category.action';
import ItemLabel from '@/components/ItemLabel';
import Empty from '@/components/Empty';
import { searchEmpty } from '@/statics';

const Category: FC = (): JSX.Element => {
  const { category, setCari, cari } = useAction();
  console.log('cari', category);

  return (
    <Box pt={4} px={4}>
      <HStack>
        <BackButton link="/" />
        <Search title="Search" onSearch={setCari} onClear={() => setCari('')} />
      </HStack>
      <Box mt={10}>
        <Heading size="lg">Shop by Categories</Heading>
        <VStack mt={8} align="start">
          {category
            ?.filter((e) => {
              if (cari === '') {
                return e;
              } else if (e.name.toLowerCase().includes(cari.toLowerCase())) {
                return e;
              }
            })
            .map((e) => (
              <ItemLabel
                key={e?.id}
                image={e?.icon}
                description={e?.description}
                name={e?.name}
              />
            ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Category;
