import { Box, HStack, Heading, Image } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  name: string;
  image: string;
}
const ItemCategory: FC<IProps> = ({ image, name }): JSX.Element => {
  return (
    <Box boxSize="100px">
      <Image rounded="full" src={image} alt="Dan Abramov" />
      <Box mt={2} fontWeight="normal" textAlign="center">
        {name}
      </Box>
    </Box>
  );
};
export default ItemCategory;
