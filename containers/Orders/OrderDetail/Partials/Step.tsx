import Icon from "@/components/Icon";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { memo } from "react";

interface IProps {
  title?: string;
  icon?: string;
  isActive?: boolean;
  isLast?: boolean;
  isDone?: boolean;
  isSmall?: boolean;
  isDanger?: boolean;
  isFullWidth?: boolean;
  children?: any;
}
const Step: React.FC<IProps> = ({
  title,
  icon,
  isActive,
  isLast,
  isDone,
  isSmall,
  isDanger,
  isFullWidth,
  children,
}) => {
  return (
    <Flex
      align={(isActive && !isSmall) || isDone ? "flex-start" : "center"}
      position="relative"
      {...(!isLast && {
        _after: {
          bottom: isSmall ? "-26px" : "-23px",
          transform: "rotate(225deg)",
          content: '""',
          position: "absolute",
          left: "14px",
          zIndex: "11",
          display: "block",
          width: "5px",
          height: "5px",
          borderTop: "1px solid",
          borderTopColor: isDone
            ? "green.500"
            : isSmall
            ? "font.ink"
            : "border",
          borderLeft: "1px solid",
          borderLeftColor: isDone
            ? "green.500"
            : isSmall
            ? "font.ink"
            : "border",
        },
      })}
    >
      {!isLast && (
        <Box
          position="absolute"
          height="calc(100% - 16px)"
          width="1px"
          top="39px"
          left="16px"
          _after={{
            display: "inline-block",
            content: "' '",
            w: "1px",
            bg: isDone ? "green.500" : isSmall ? "font.ink" : "border",
            ...(isSmall
              ? { h: "calc(100% - 4px)", position: "absolute", top: "-1" }
              : { h: "full" }),
          }}
        />
      )}
      <Flex
        border="1px solid"
        borderColor={isActive && !isDanger ? "border" : "white"}
        rounded="full"
        align="center"
        justify="center"
      >
        <Flex
          w="30px"
          h="30px"
          border="4px solid"
          borderColor={
            isDanger
              ? "font.error"
              : isActive
              ? "white"
              : isDone
              ? "green.500"
              : "bg.footer"
          }
          rounded="full"
          align="center"
          justify="center"
          bg={
            isDanger
              ? "blackAlpha.100"
              : isActive
              ? "primary"
              : isDone
              ? "green.500"
              : "bg.footer"
          }
        >
          <Icon name={icon} color="#fff" size={18} isStroke={isDanger} />
        </Flex>
      </Flex>
      <Box ml="2" {...(isFullWidth && { flex: 1 })}>
        <Heading
          as="p"
          fontSize="sm"
          fontWeight="semibold"
          {...(isSmall && { fontFamily: "Nunito, sans-serif, sans-serif" })}
        >
          {title}
        </Heading>
        {children && (isActive || isDone) && <Box mt="1">{children}</Box>}
      </Box>
    </Flex>
  );
};
export default memo(Step);
