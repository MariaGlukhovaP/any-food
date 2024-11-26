import styles from "./subtitle.module.css";

export const Subtitle = ({ subtitle }) => {
  return <h3 className={styles.subtitle}>{subtitle}</h3>;
};
