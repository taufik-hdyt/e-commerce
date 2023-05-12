import { Flex, Spacer, Text } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { memo } from "react";
import Link from "next/link";

interface IProps {
  menu?: string;
  link?: string;
}
const ProfileMenu: React.FC<IProps> = ({ menu, link }): JSX.Element => {
  return (
    <Link href={`${link}`}>
      <Flex p={4} bg="white" w="full" rounded="lg">
        <Text fontSize="lg" fontWeight="bold">
          {menu}
        </Text>
        <Spacer />
        <FiChevronRight size={30} />
      </Flex>
    </Link>
  );
};

export default memo(ProfileMenu);
