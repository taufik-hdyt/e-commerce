import { IProfil } from '@/containers/Dashboard/Dashboard.types';
import { AuthContext, authContextType } from '@/hooks/useAuth';
import callApi from '@/utils/fetcher/fetcher';
import { Router, useRouter } from 'next/router';
import { ReactNode, useState, useEffect } from 'react';

type Props = {
  children: ReactNode;
  token: string;
};

export function AuthProvider({ children, token }: Props) {
  const [user, setUser] = useState<IProfil | null>(null);
  const router = useRouter();
  const getProfile = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    callApi({
      ctx: {},
      uri: '/users/me',
      method: 'GET',
      params: {},
    })
      .then(function (response) {
        console.log(response);
        if (response.data.data.age === null) {
          router.push('/set-gender');
        }
        setUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const value: authContextType = {
    user: user,
    token: token,
    getProfile: getProfile,
  };

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
