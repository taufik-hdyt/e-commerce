import { Box } from '@chakra-ui/react';
import { memo } from 'react';
import { navbarStyled } from './NavbarAction.styled';

interface IProps {
  children?: JSX.Element;
}
const NavbarAction: React.FC<IProps> = ({ children }): JSX.Element => {
  return <Box {...navbarStyled}>{children}</Box>;
};

export default memo(NavbarAction);
