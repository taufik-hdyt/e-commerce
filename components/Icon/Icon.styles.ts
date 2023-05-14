import styled from "@emotion/styled";

import { IIcon } from "./Icon.types";

export const IconStyled = styled.i<IIcon>(
  ({ color, size, isStroke, isSimple }) => ({
    verticalAlign: "middle",
    svg: {
      width: `${size || 14}px`,
      height: `${size || 14}px`,
      verticalAlign: "-0.125em",

      ...(isStroke && !isSimple
        ? {
            path: {
              stroke: color || "currentcolor",
              strokeOpacity: "inherit",
            },
          }
        : isSimple
        ? null
        : {
            fill: color || "currentcolor",
            path: {
              fill: color || "currentcolor",
            },
          }),
    },
  })
);
