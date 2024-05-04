// @ts-ignore
import React, { createContext, ReactNode, useContext, useState } from "react";

/**
 * TODO Типизировать creatContext
 */
const AuthContext = createContext<any>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const login = (userData: string) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
