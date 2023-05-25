import { Box, Image, Stack } from '@chakra-ui/react';

interface IProps {
  name?: string;
  icon?: string;
}
const ItemLabel: React.FC<IProps> = ({ icon, name }): JSX.Element => {
  return (
    <Box>
      <Box w="110px">
        <Image rounded="full" w="full" src={icon} alt={name} />
        <Box fontWeight="semibold" mt={2} textAlign="center">
          {name}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemLabel;
