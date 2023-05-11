import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { ITextLink } from "./TextLink.type";

const TextLink: React.FC<ITextLink> = ({
  title,
  link,
  children,
  isAnchor,
  ...props
}): JSX.Element => {
  if (isAnchor) {
    return (
      <Link href={link} {...props}>
        {title}
        {children}
      </Link>
    );
  }
  return (
    <NextLink href={link} as={link}>
      <Link {...props}>
        {title}
        {children}
      </Link>
    </NextLink>
  );
};

export default React.memo(TextLink);
