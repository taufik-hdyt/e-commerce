import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiChevronLeft } from "react-icons/fi";

interface IProps {
  link?: string;
}
const BackButton: React.FC<IProps> = ({ link }): JSX.Element => {
  return (
    <Button
      as={NextLink}
      href={`/${link}`}
      px={2.5}
      py={6}
      aria-label="back"
      rounded="full"
      bg="white"
      fontWeight="bold"
    >
      <FiChevronLeft size={30} />
    </Button>
  );
};

export default BackButton;
