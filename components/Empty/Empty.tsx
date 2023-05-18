import { Box, Button, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import { memo } from "react";
import Icon from "../Icon";
import { notifEmpty } from "@/statics";

interface IProps {
  buttonName?: string;
  titleEmpty?: string;
  iconEmpty?: string;
  link?: string;
}
const Empty: React.FC<IProps> = ({
  buttonName,
  iconEmpty,
  titleEmpty,
  link,
}): JSX.Element => {
  return (
    <Stack align="center">
      <Icon name={iconEmpty} isSimple size={120} />
      <Text fontSize="3xl" fontWeight="bold">
        {titleEmpty}
      </Text>
      <Spacer />
      <Spacer />
      <Button
        as="link"
        href={`/${link}`}
        bg="primary"
        color="white"
        py={6}
        px={6}
        rounded="full"
      >
        {buttonName}
      </Button>
    </Stack>
  );
};

export default memo(Empty);
