import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import FileValue from 'react-images-upload';
import { error } from 'console';
import { FormEvent } from 'react';

export const useActionProfile = () => {
  const { token, user, getProfile } = useAuth();

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

  //===========
  const [photo, setPhoto] = useState<any>(user?.photo);
  function convertToBase64(e: any) {
    console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setPhoto(reader.result);
    };
    reader.onerror = (error) => {
      console.log('Error:', error);
    };
  }

  const updateProfile = (e: FormEvent) => {
    e.preventDefault();
    axios
      .put(
        `/api/users/me`,
        {
          name: nama,
          email: emailAddress,
          phone_number: noHp,
          photo,
        },
        config,
      )
      .then(function (response) {
        console.log(response);
        getProfile();
        onClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onClose = () => {
    setPhoto(null);
    setNama(user?.name);
    setEmailAddress(user?.email);
    setNoHp(user?.phone_number);
    onCloseEditProfile();
  };

  return {
    updateProfile,
    isOpenEditProfile,
    onOpenEditProfile,
    onClose,
    nama,
    setNama,
    emailAddress,
    setEmailAddress,
    noHp,
    setNoHp,
    convertToBase64,
    photo,
    user,
  };
};
