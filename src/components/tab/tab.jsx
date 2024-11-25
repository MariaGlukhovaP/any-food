import classNames from "classnames";
import styles from "./tab.module.css";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <button
      className={classNames(styles.tab, {
        [styles.activeTab]: isActive,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
