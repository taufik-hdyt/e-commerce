import { Box, Button, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import { memo } from "react";
import { send } from "@/statics";
import Icon from "@/components/Icon";
import Link from "next/link";

interface IProps {
  returnLogin?: () => void;
}
const ResetSuccess: React.FC<IProps> = ({ returnLogin }): JSX.Element => {
  return (
    <Stack align="center" mt={"40"}>
      <Icon name={send} isSimple size={120} />
      <Text fontSize="3xl" fontWeight="bold" textAlign="center">
        We Sent you an Email to reset your password.
      </Text>
      <Spacer />
      <Spacer />

      <Button
        onClick={returnLogin}
        bg="primary"
        color="white"
        py={6}
        px={6}
        rounded="full"
      >
        Return to Login
      </Button>
    </Stack>
  );
};

export default memo(ResetSuccess);
