import { useAuth } from "../auth-context/use-auth";
import { Button } from "../button/button";

import styles from "./log-in-out.module.css";

export const LogInOut = () => {
  const { user, setUser, isAuth } = useAuth();

  return (
    <div>
      {!isAuth && (
        <Button
          text="Log In"
          buttonType={styles.logInButton}
          onClick={() => setUser("Maria")}
        />
      )}

      {isAuth && (
        <div className={styles.logOutContainer}>
          <span>{user}</span>
          <Button
            text="Log Out"
            buttonType={styles.logInButton}
            onClick={() => setUser(undefined)}
          />
        </div>
      )}
    </div>
  );
};
