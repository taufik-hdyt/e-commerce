import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { RiSearch2Line } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";

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

      <InputRightElement mr={2} h="full">
        <TiDeleteOutline size={30} cursor="pointer" />
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
