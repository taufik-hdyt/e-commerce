import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ICategory } from '../Category/Category.types';

export const useAction = () => {
  const [category, setCategory] = useState<ICategory[] | null>(null);
  const { token, user } = useAuth();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getCategory = () => {
    axios
      .get(`api/labels`, config)
      .then(function (response) {
        console.log(response);
        setCategory(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    getCategory,
    category,
  };
};
