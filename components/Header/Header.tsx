import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { VscChevronDown } from 'react-icons/vsc';
import { headerStyled } from './Header.styles';
import Link from 'next/link';
import { useViewportScroll } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import Icon from '../Icon';
import { bottomArrow } from '@/statics';

interface IProps {
  pageTitle?: string;
  isNoHeader?: boolean;
  isNavbarTop?: boolean;
  openCategory?: () => void;
}
const Header: FC<IProps> = ({
  pageTitle,
  isNoHeader,
  isNavbarTop,
  openCategory,
}): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange(() => {
      setIsScrolled(scrollY.get() > 0);
    });
  }, [scrollY]);

  const { user } = useAuth();

  return (
    <>
      {!isNoHeader && (
        <Box {...headerStyled}>
          {isNavbarTop && (
            <HStack
              boxShadow={isScrolled ? 'sm' : 'none'}
              spacing="auto"
              py={3}
              px={4}
            >
              <Link href="/profile">
                <Avatar bg="teal.500" name={user?.name} src={user?.photo} />
              </Link>
              <Button
                rounded="full"
                bg="white"
                fontWeight="bold"
                rightIcon={<Icon name={bottomArrow} isSimple size={14} />}
                onClick={openCategory}
              >
                Woman
              </Button>
              <Link href="/cart">
                <IconButton
                  size="lg"
                  aria-label="cart"
                  bg="primary"
                  rounded="full"
                >
                  <Center h="full">
                    <BiShoppingBag color="white" size={25} />
                  </Center>
                </IconButton>
              </Link>
            </HStack>
          )}

          {pageTitle && (
            <Box px={4} pt={2}>
              <Heading fontSize="3xl" fontWeight="bold">
                {pageTitle}
              </Heading>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};
export default Header;
