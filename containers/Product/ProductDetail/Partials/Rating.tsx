import Icon from "@/components/Icon";
import { star } from "@/statics";
import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

const Rating: React.FC = (): JSX.Element => {
  return (
    <Box mt={4}>
      <HStack spacing="auto">
        <Flex align="center" gap={3}>
          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
          <Text fontWeight="bold">Taufik</Text>
        </Flex>

        <Flex>
          <Icon name={star} color="primary" size={20} />
          <Icon name={star} color="primary" size={20} />
          <Icon name={star} color="primary" size={20} />
          <Icon name={star} color="white" size={20} />
          <Icon name={star} color="white" size={20} />
        </Flex>
      </HStack>
      <Box mt={2} color="rgba(5, 5, 5, 0.5);">
        Gucci transcribes its heritage, creativity, and innovation into a
        plenitude of collections. From staple items to distinctive accessories.
      </Box>
      <Box mt={3} fontWeight="semibold" color="#050505">
        12days ago
      </Box>
    </Box>
  );
};

export default memo(Rating);
