import { createContext, ReactNode, useState, useEffect } from 'react';

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log('Entrou');
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'John',
        avatarUrl: 'http://github.com/john.png',
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
}