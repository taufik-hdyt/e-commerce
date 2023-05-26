import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

import { memo, useRef } from 'react';
import ProfileDetail from './ProfileDetail';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import Link from 'next/link';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import Drawer from '@/components/Drawer/Drawer';
import { useActionProfile } from './Profile.action';
import { BsPencil } from 'react-icons/bs';

const Profile: React.FC = (): JSX.Element => {
  const {
    nama,
    emailAddress,
    isOpenEditProfile,
    onOpenEditProfile,
    onClose,
    noHp,
    setEmailAddress,
    setNama,
    setNoHp,
    updateProfile,
    convertToBase64,
    photo,
    user,
  } = useActionProfile();
  const router = useRouter();
  const signOut = () => {
    destroyCookie(null, 'token');
    router.push('/login');
  };

  const fileRef = useRef<HTMLInputElement>(null);

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
            openEditProfil={onOpenEditProfile}
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

      <Drawer isOfferlay isOpen={isOpenEditProfile} onClose={onClose}>
        <Center>
          <Box>
            <Avatar
              border="1px solid "
              alignItems="center"
              size="xl"
              bg="teal.500"
              name={user?.name}
              src={photo ? photo : user?.photo}
            />
            <Box
              bg="white"
              w={8}
              h={8}
              p={1.5}
              rounded="full"
              pos="relative"
              left={16}
              bottom={8}
              border="1px solid #9747FF"
            >
              <Center
                cursor="pointer"
                h="full"
                onClick={() => {
                  if (fileRef.current) {
                    fileRef.current.click();
                  }
                }}
              >
                <BsPencil color="#9747FF" size={24} />
              </Center>
            </Box>
            <Input
              ref={fileRef}
              display="none"
              type="file"
              accept="image/*"
              onChange={convertToBase64}
            />
          </Box>
        </Center>
        {isOpenEditProfile && (
          <form onSubmit={updateProfile}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                size="lg"
                variant="outline"
                bg="white"
                value={nama}
                defaultValue={user?.name}
                onChange={(e) => setNama(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                size="lg"
                variant="outline"
                bg="white"
                value={emailAddress}
                defaultValue={user?.email}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                size="lg"
                variant="outline"
                bg="white"
                value={noHp}
                defaultValue={user?.phone_number}
                onChange={(e) => setNoHp(e.target.value)}
              />
            </FormControl>

            <Button
              mt={4}
              size="lg"
              color="white"
              bg="primary"
              w="full"
              rounded="full"
              type="submit"
            >
              Edit
            </Button>
          </form>
        )}
      </Drawer>
    </Box>
  );
};

export default memo(Profile);
