import styles from "./links-container.module.css";

export const LinksContainer = ({ children }) => {
  return <div className={styles.linksContainer}>{children}</div>;
};
