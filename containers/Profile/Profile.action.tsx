import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { IProfil } from '../Dashboard/Dashboard.types';
import { useState, useRef } from 'react';

export const useActionProfile = () => {
  const { token, user } = useAuth();
  const {
    isOpen: isOpenEditProfile,
    onOpen: onOpenEditProfile,
    onClose: onCloseEditProfile,
  } = useDisclosure();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [nama, setNama] = useState<any>(user?.name);
  const [emailAddress, setEmailAddress] = useState<any>(user?.email);
  const [noHp, setNoHp] = useState<any>(user?.phone_number);

  ///////////////////

  const updateProfile = () => {
    axios
      .put(
        `api/users/me`,
        {
          name: nama,
          email: emailAddress,
          phone_number: noHp,
        },
        config,
      )
      .then(function (response) {
        console.log(response);
        // toast({
        //   title: response.data.message,
        //   status: 'error',
        //   isClosable: true,
        //   position: 'top',
        // });
        onCloseEditProfile();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    updateProfile,
    isOpenEditProfile,
    onOpenEditProfile,
    onCloseEditProfile,
    nama,
    setNama,
    emailAddress,
    setEmailAddress,
    noHp,
    setNoHp,
  };
};
