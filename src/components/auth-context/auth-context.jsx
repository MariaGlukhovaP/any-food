"use client";

import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    setAuth((prev) =>
      prev.isAuthorized
        ? { isAuthorized: false }
        : {
            isAuthorized: true,
            name: "Antony",
            id: "a304959a-76c0-4b34-954a-b38dbf310360",
          }
    );
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
