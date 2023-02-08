import { ReactNode } from 'react';

export type userContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; 
}

export type userProviderType = {
  children: ReactNode;
}
