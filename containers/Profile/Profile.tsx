import {
  Avatar,
  Box,
  Button,
  Center,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { memo } from 'react';
import ProfileDetail from './ProfileDetail';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import Link from 'next/link';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import ModalComponent from './Partials/ModalEdit';
import ModalEdit from './Partials/ModalEdit';

const Profile: React.FC = (): JSX.Element => {
  const router = useRouter();
  const signOut = () => {
    destroyCookie(null, 'token');
    router.push('/login');
  };

  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box py={20} px={4}>
      <Box>
        <Center>
          <Avatar
            alignItems="center"
            size="xl"
            bg="teal.500"
            name={user?.name}
            src={user?.photo}
          />
        </Center>

        <Box mt={8}>
          <ProfileDetail
            name={user?.name}
            email={user?.email}
            contact={user?.phone_number}
            openEditProfil={onOpen}
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
            onClick={signOut}
          >
            Sign Out
          </Button>
        </Stack>
      </Box>

      <ModalEdit title="Edit Profil" isOpen={isOpen} onCLose={onClose} />
    </Box>
  );
};

export default memo(Profile);
