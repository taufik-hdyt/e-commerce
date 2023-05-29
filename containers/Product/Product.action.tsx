import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IProduct } from './Product.types';

export const useProductAction = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [cari, setCari] = useState<string>('');
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const { token } = useAuth();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getProducts = () => {
    axios
      .get(`/api/products`, {
        params: {
          search: `${cari}`,
        },
        ...config,
      })
      .then(function (response) {
        console.log(response);
        setProducts(response.data.data);
        setTotalProduct(response.data.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    products,
    setCari,
    getProducts,
    totalProduct,
  };
};
