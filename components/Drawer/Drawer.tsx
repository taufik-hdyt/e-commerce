import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { memo } from "react";
import { menHeaderStyled } from "./Drawer.styles";
import Icon from "../Icon";
import { ceklis, deleteSearch, leftArrow } from "@/statics";

interface IProps {
  isOpen?: boolean;
  onToggle?: () => void;
}
const Drawer: React.FC<IProps> = ({ onToggle, isOpen }): JSX.Element => {
  return (
    <Box {...menHeaderStyled({ isOpen })} p={4}>
      <Flex justify="space-between" align="center">
        <Heading as="h2" size="lg">
          Size
        </Heading>
        <Box onClick={onToggle}>
          <Icon name={deleteSearch} isStroke size={20} />
        </Box>
      </Flex>

      <Box w="full" mt={8} bg="#F5F5F5" p={4} rounded="full">
        <Flex px={2} justify="space-between">
          <Box fontSize="lg" fontWeight="bold">
            S
          </Box>
          {/* <Icon name={ceklis} isStroke color="black" size={20} /> */}
        </Flex>
      </Box>
    </Box>
  );
};

export default memo(Drawer);
