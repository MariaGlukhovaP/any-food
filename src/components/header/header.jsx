import { LogInOut } from "../log-in-out/log-in-out";
import { SwitchTheme } from "../switch-theme/switch-theme";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <SwitchTheme />
      <img src="https://course-react.javascript.ru/static/media/logo.fca2e89e.svg" />
      <LogInOut />
    </header>
  );
};
