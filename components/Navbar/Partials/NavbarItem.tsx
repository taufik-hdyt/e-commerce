import Icon from '@/components/Icon';
import TextLink from '@/components/TextLink';
import { MenuButton } from '@chakra-ui/react';
import React from 'react';
import { INavbarItem } from '../NavbarItem.types';
import { linkStyled } from '../Navbar.styled';

const NavbarItem: React.FC<INavbarItem> = ({
  icon,
  link,
  isSelected,
}): JSX.Element => {
  return (
    <TextLink link={link} rel="noreferrer" {...linkStyled({ isSelected })}>
      <Icon name={icon} isStroke color={isSelected ? 'white' : ''} size={24} />
    </TextLink>
  );
};

export default React.memo(NavbarItem);
