import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    userDetails: null,
  });

  const loginUser = (userDetails) => {
    setAuthState({ isAuth: true, userDetails });
  };

  const logoutUser = () => {
    setAuthState({ isAuth: false, userDetails: null });
  };

  const providerState = { authState, loginUser, logoutUser };

  return (
    <AuthContext.Provider value={providerState}>
      {children}
    </AuthContext.Provider>
  );
};