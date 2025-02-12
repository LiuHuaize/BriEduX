"use client";

import React from 'react';

interface AuthContextType {
  user: null;
  loading: false;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  loading: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const useAuth = () => {
  return {
    user: null,
    loading: false,
  };
};
