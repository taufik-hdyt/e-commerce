import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import Icon from '../Icon';
import { deleteSearch, searchh } from '@/statics';
import { useState } from 'react';
import { ISearch } from './Search.types';

const Search: React.FC<ISearch> = ({
  onClear,
  onSearch,
  title,
}): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const onKeyUpSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch && onSearch(search);
    }
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: keyword } = e.target;
    setSearch(keyword);
  };

  const handleOnClear = () => {
    setSearch('');
  };

  return (
    <InputGroup bg="white" rounded="full">
      <Input
        ml={5}
        type="text"
        variant="unstyled"
        py={3}
        value={search}
        placeholder={title}
        onChange={onChangeSearch}
        onKeyUp={onKeyUpSearch}
      />

      <InputLeftElement ml={3} h="full">
        <Icon name={searchh} isSimple size={20} />
      </InputLeftElement>

      <InputRightElement
        onClick={handleOnClear}
        cursor="pointer"
        fontSize="xl"
        fontWeight="bold"
        mr={2}
        h="full"
      >
        {search && <Icon name={deleteSearch} size={20} />}
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
