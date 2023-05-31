import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ICategory } from './Category.types';

export const useAction = (params: any) => {
  const [category, setCategory] = useState<ICategory[] | null>(null);
  const { token } = useAuth();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getLabels = () => {
    axios
      .get(`api/labels`, {
        params,
        ...config,
      })
      .then(function (response) {
        setCategory(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        setCategory(null);
      });
  };
  useEffect(() => {
    getLabels();
  }, [params]);

  return {
    category,
  };
};
