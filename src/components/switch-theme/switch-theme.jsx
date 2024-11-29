import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";

import styles from "./switch-theme.module.css";

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      text={theme === "light" ? "Switch to dark" : "Switch to light"}
      buttonType={styles.switchTheme}
      onClick={toggleTheme}
    />
  );
};
