"use client";

import { useAuth } from "../auth-context/use-auth";
import { Button } from "../button/button";

import styles from "./log-in-out.module.css";

export const LogInOut = () => {
  const { auth, toggleAuth } = useAuth();

  const { isAuthorized, name } = auth;

  return (
    <div>
      {isAuthorized && name && <div>{auth.name}</div>}
      <Button
        onClick={toggleAuth}
        buttonType={styles.logInOutButton}
        text={isAuthorized ? "Log out" : "Log in"}
      />
    </div>
  );
};
