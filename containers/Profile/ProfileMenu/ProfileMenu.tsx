import { Flex, Spacer, Text, color } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { memo } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { leftArrow, rightArrow } from "@/statics";

interface IProps {
  menu?: string;
  link?: string;
}
const ProfileMenu: React.FC<IProps> = ({ menu, link }): JSX.Element => {
  return (
    <Link href={`${link}`}>
      <Flex
        p={4}
        bg="white"
        w="full"
        rounded="lg"
        _hover={{ bg: "#9747FF", color: "white" }}
      >
        <Text fontSize="lg" fontWeight="bold">
          {menu}
        </Text>
        <Spacer />
        <Icon name={rightArrow} isStroke size={20} />
      </Flex>
    </Link>
  );
};

export default memo(ProfileMenu);
