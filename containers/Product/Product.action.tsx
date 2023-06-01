import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IProduct } from './Product.types';
import { useDisclosure } from '@chakra-ui/react';

export const useProductAction = (params: any) => {
  const { token } = useAuth();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [totalProduct, setTotalProduct] = useState<any>(null);

  //filter
  const {
    isOpen: isOpenFilterPrice,
    onOpen: onOpenFilterPrice,
    onClose: onCloseFilterPrice,
  } = useDisclosure();
  const {
    isOpen: isOpenFilterSortBy,
    onOpen: onOpenFilterSortBy,
    onClose: onCloseFilterSortBy,
  } = useDisclosure();
  const {
    isOpen: isOpenFilterGender,
    onOpen: onOpenFilterGender,
    onClose: onCloseFilterGender,
  } = useDisclosure();

  //getProduct
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

  const onClose = () => {
    onCloseFilterPrice();
    onCloseFilterSortBy();
    onCloseFilterGender();
  };

  return {
    products,
    totalProduct,
    onClose,

    isOpenFilterGender,
    isOpenFilterPrice,
    isOpenFilterSortBy,
    onOpenFilterGender,
    onOpenFilterPrice,
    onOpenFilterSortBy,
  };
};
