import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import Icon from '../Icon';
import { deleteSearch, search } from '@/statics';
import { useState } from 'react';

const Search: React.FC = (): JSX.Element => {
  const [cari, setCari] = useState('');
  return (
    <InputGroup bg="white" rounded="full">
      <Input
        ml={5}
        type="text"
        variant="unstyled"
        value={cari}
        py={3}
        placeholder="Seacrh"
        onChange={(e) => {
          setCari(e.target.value);
        }}
      />

      <InputLeftElement ml={3} h="full">
        <Icon name={search} isSimple size={20} />
      </InputLeftElement>

      <InputRightElement
        cursor="pointer"
        onClick={() => setCari('')}
        fontSize="xl"
        fontWeight="bold"
        mr={2}
        h="full"
      >
        {cari && <Icon name={deleteSearch} size={20} />}
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
