import { leftArrow } from "@/statics";
import { Button, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import Icon from "../Icon";

interface IProps {
  link?: string;
}
const BackButton: React.FC<IProps> = ({ link }): JSX.Element => {
  return (
    <IconButton
      as={NextLink}
      href={`/${link}`}
      variant="solid"
      bg="white"
      rounded="full"
      size="lg"
      aria-label="Back Button"
      icon={<Icon name={leftArrow} isStroke size={20} />}
    />
  );
};

export default BackButton;
