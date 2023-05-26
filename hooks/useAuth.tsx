import { IProfil } from '@/containers/Dashboard/Dashboard.types';
import { createContext, useContext } from 'react';

export type authContextType = {
  user: IProfil | null;
  token: string | null;
  getProfile: () => void;
};

const authContextDefaultValues: authContextType = {
  user: null,
  token: null,
  getProfile: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, useAuth };
