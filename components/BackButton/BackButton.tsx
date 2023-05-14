import { leftArrow } from "@/statics";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import Icon from "../Icon";

interface IProps {
  link?: string;
}
const BackButton: React.FC<IProps> = ({ link }): JSX.Element => {
  return (
    <Button
      as={NextLink}
      href={`/${link}`}
      px={3}
      py={6}
      aria-label="back"
      rounded="full"
      bg="white"
      fontWeight="bold"
    >
      <Icon name={leftArrow} isStroke size={20} />
    </Button>
  );
};

export default BackButton;
