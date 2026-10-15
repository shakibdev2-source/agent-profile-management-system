"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "admin", role: "admin" });

  const toggleRole = (newRole) => {
    setUser((prev) => ({ ...prev, role: newRole }));
  };

  return (
    <AuthContext.Provider value={{ user, toggleRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);