import { createContext, useContext, useState } from 'react';
import { userContextType, userProviderType } from '../types/userContext';

const UserContext = createContext<userContextType| null>(null);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({children}: userProviderType) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
