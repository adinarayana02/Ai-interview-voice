"use client";
import React, { createContext, useContext } from 'react';

export const UserDetailContext = createContext();

export const UserDetailProvider = ({ children }) => {
  return (
    <UserDetailContext.Provider value={{ user: null }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export const useUserDetail = () => {
  return useContext(UserDetailContext);
};
