import { Box, Button, Center, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { navbarStyled } from './NavbarAction.styled';

interface IProps {
  children?: JSX.Element;
  posFixed?: boolean;
}
const NavbarAction: React.FC<IProps> = ({
  children,
  posFixed,
}): JSX.Element => {
  return <Box {...navbarStyled}>{children}</Box>;
};

export default memo(NavbarAction);
