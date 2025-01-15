"use client";

import classNames from "classnames";
import styles from "./tab-link.module.css";

export const TabLink = ({ title, onClick, isActive }) => {
  return (
    <button
      className={classNames(styles.link, {
        [styles.activeLink]: isActive,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
