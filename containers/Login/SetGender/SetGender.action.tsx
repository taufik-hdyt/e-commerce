import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

export const useAction = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useAuth();
  const router = useRouter();
  const toast = useToast();
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const update = (e: FormEvent) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    e.preventDefault();
    console.log(update);
    setLoading(true);
    axios
      .put(
        `api/users/set-gender`,
        {
          gender,
          age,
        },
        {
          ...config,
        },
      )
      .then(function (response) {
        console.log(response);

        router.push('/');
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: error.response.data.message,
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    gender,
    setGender,
    age,
    setAge,
    update,
  };
};
