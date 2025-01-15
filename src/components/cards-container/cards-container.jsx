import styles from "./cards-container.module.css";

export const CardsContainer = ({ children }) => {
  return <div className={styles.cardsContainer}>{children}</div>;
};
