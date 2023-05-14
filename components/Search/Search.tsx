import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { RiSearch2Line } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import Icon from "../Icon";
import { deleteSearch } from "@/statics";

const Search: React.FC = (): JSX.Element => {
  return (
    <InputGroup bg="white" rounded="full">
      <Input
        ml={5}
        type="text"
        variant="unstyled"
        py={3}
        placeholder="Seacrh"
      />

      <InputLeftElement ml={3} h="full">
        <RiSearch2Line size={25} />
      </InputLeftElement>

      <InputRightElement fontSize="xl" fontWeight="bold" mr={2} h="full">
        <Icon name={deleteSearch} size={20} />
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
