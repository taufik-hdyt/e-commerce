import Icon from "@/components/Icon";
import { Box, Flex } from "@chakra-ui/react";
import { memo } from "react";

interface IProps {
  name: string;
  icon: string;
}
const SocialLogin: React.FC<IProps> = ({ icon, name }): JSX.Element => {
  return (
    <Flex
      cursor="pointer"
      gap={24}
      rounded="full"
      bg="white"
      p={3.5}
      w="full"
      align="center"
      _hover={{ bg: "primary", color: "white" }}
    >
      <Icon isSimple name={icon} size={30} />
      <Box fontWeight="bold">Continue With {name}</Box>
    </Flex>
  );
};

export default memo(SocialLogin);
