import { BoxProps } from "@chakra-ui/react";

interface IStyle {
  readonly isOpen?: boolean;
}

export const menHeaderStyled = ({ isOpen }: IStyle): BoxProps => ({
  pos: "fixed",
  boxShadow: "0px 0px 21.7091px rgba(0, 0, 0, 0.16)",
  bg: "white",
  w: "465px",
  h: isOpen ? "300px" : "0px",
  transition: ".2s ease",
  zIndex: "9999",
  bottom: "0",
  overflow: "hidden",
  roundedTop: "3xl  ",
});
