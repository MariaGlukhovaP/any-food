"use client";

import classNames from "classnames";
import styles from "./button-link.module.css";

export const ButtonLink = ({ title, onClick, isActive }) => {
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
