"use client";

import { BeatLoader } from "react-spinners";

import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <BeatLoader size={30} color={"#ffbe1a"} loading={true} />
    </div>
  );
};
