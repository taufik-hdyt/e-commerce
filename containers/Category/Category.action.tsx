import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ICategory } from './Category.types';

export const useAction = () => {
  const [category, setCategory] = useState<ICategory[] | null>(null);
  const [cari, setCari] = useState<string>('');
  const { token } = useAuth();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const getLabels = () => {
      axios
        .get(`api/labels`, {
          params: {
            search: `${cari}`,
          },
          ...config,
        })
        .then(function (response) {
          setCategory(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getLabels();
  }, []);

  return {
    category,
    setCari,
    cari,
  };
};
