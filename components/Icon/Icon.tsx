import React from "react";
import SVG from "react-inlinesvg";

import { IconStyled } from "./Icon.styles";
import { IIcon } from "./Icon.types";

const Icon: React.FC<IIcon> = ({
  name,
  color,
  size,
  isStroke,
  isSimple,
  ...props
}): JSX.Element => {
  return (
    <IconStyled
      name={name}
      color={color}
      size={size}
      isStroke={isStroke}
      isSimple={isSimple}
      {...props}
    >
      <SVG src={`${name}`} />
    </IconStyled>
  );
};

export default React.memo(Icon);
