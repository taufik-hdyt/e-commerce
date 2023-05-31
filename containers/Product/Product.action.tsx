import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IProduct } from './Product.types';

export const useProductAction = (params: any) => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  const [totalProduct, setTotalProduct] = useState<any>(null);
  const { token } = useAuth();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`api/products`, { params, ...config })
        .then(function (response) {
          setProducts(response.data.data);
          setTotalProduct(response.data.data.length);
        })
        .catch(function (error) {
          setProducts(null);
          setTotalProduct(null);
        });
    };

    getProducts();
  }, [params]);
  return {
    products,
    totalProduct,
  };
};
