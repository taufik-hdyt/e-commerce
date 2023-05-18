import { Box, Button, Center, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

interface IProps {
  children?: any;
  posFixed?: boolean;
}
const NavbarAction: React.FC<IProps> = ({
  children,
  posFixed,
}): JSX.Element => {
  return (
    <Box
      bg="white"
      w="full"
      h="75px"
      left={0}
      px={4}
      pos={posFixed ? "fixed" : "sticky"}
      bottom={0}
    >
      <Center h="full">
        <HStack
          w="34vw"
          bg="primary"
          spacing="auto"
          color="white"
          rounded="full"
          px={6}
          py={"1.5"}
        >
          {children}
        </HStack>
      </Center>
    </Box>
  );
};

export default memo(NavbarAction);
