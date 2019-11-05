import React, { createContext, useState, useCallback, useMemo } from "react";

export const AuthContext = createContext({})

export function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticated || false);
  
  const login = useCallback(() => {
    setIsAuthenticated(true)
  }, [setIsAuthenticated]);

  const logout = useCallback(() => {
    setIsAuthenticated(false)
  }, [setIsAuthenticated])

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  )

  return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {}
