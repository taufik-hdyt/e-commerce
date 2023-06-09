import { BoxProps, GridProps, LinkProps } from '@chakra-ui/react';

interface IStyle {
  readonly isSelected?: boolean;
}
export const navbarStyled: BoxProps = {
  pos: 'fixed',
  bottom: '0',
  zIndex: '100',
  bg: 'white',
  as: 'nav',
  maxW: '500px',
  w: 'full',
  h: '70px',
  shadow: 'md',
  roundedTop: '20px',
};

export const linkStyled = ({ isSelected }: IStyle): LinkProps => ({
  bg: isSelected ? 'primary' : '',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  pos: 'relative',
  w: '40px',
  h: '40px',
  rounded: 'full',

  _hover: {
    bg: isSelected ? '' : '#D1D1D1',
  },
});
