import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const isAuth = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
