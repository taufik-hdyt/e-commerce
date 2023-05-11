import Icon from "@/components/Icon";
import TextLink from "@/components/TextLink";
import { MenuButton } from "@chakra-ui/react";
import React from "react";
import { INavbarItem } from "../NavbarItem.types";
import { linkStyled } from "../Navbar.styled";

const NavbarItem: React.FC<INavbarItem> = ({
  icon,
  isAnchor,
  isTarget,
  link,
  isSelected,
}): JSX.Element => {
  return (
    <TextLink
      target={isTarget ? "_blank" : ""}
      isAnchor={isAnchor}
      link={link}
      rel="noreferrer"
      {...linkStyled({ isSelected })}
    >
      {isSelected ? (
        <Icon name={icon} isStroke color="white" size={30} />
      ) : (
        <Icon name={icon} isSimple size={30} />
      )}
    </TextLink>
  );
};

export default React.memo(NavbarItem);
