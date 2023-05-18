import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { memo } from "react";
import ProfileDetail from "./ProfileDetail";
import { FiChevronRight } from "react-icons/fi";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import Link from "next/link";

const Profile: React.FC = (): JSX.Element => {
  return (
    <Box pt={20} pb={20}>
      <Box>
        <Center>
          <Avatar
            alignItems="center"
            size="xl"
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
        </Center>

        <Box mt={8}>
          <ProfileDetail
            name="Taufik Hdyt"
            email="Taufikhdyt@gmail.com"
            contact="08765647"
          />
        </Box>

        <Stack mt={8}>
          <ProfileMenu menu="Address" link="/profile/address" />
          <ProfileMenu menu="Payment" link="/profile/payment" />
          <ProfileMenu menu="Notifications" link="/notifications" />
          <ProfileMenu menu="Wishlist" link="/wishlist" />
        </Stack>

        <Stack mt={20} justify="center">
          <Button
            as={Link}
            href="/login"
            fontSize="lg"
            fontWeight="bold"
            variant="unstyled"
            color="#FB6565"
            textAlign="center"
          >
            Sign Out
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default memo(Profile);
