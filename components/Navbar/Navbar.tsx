import { Box, Button, HStack } from '@chakra-ui/react';
import { memo } from 'react';
import { navbarStyled } from './Navbar.styled';

import { home, notif, orders, profile } from '@/statics';
import NavbarItem from './Partials/NavbarItem';
import { INavbar } from './NavbarItem.types';

const Navbar: React.FC<INavbar> = ({ menuSelected }): JSX.Element => {
  return (
    <Box {...navbarStyled}>
      {menuSelected && (
        <HStack h="full" w="full" spacing="auto" px="4">
          <NavbarItem
            icon={home}
            link="/"
            isSelected={menuSelected === 'home'}
          />
          <NavbarItem
            icon={notif}
            link="/notifications"
            isSelected={menuSelected === 'notifications'}
          />
          <NavbarItem
            icon={orders}
            link="/orders"
            isSelected={menuSelected === 'orders'}
          />
          <NavbarItem
            icon={profile}
            link="/profile"
            isSelected={menuSelected === 'profile'}
          />
        </HStack>
      )}
    </Box>
  );
};

export default memo(Navbar);
