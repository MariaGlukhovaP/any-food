import styles from "./description.module.css";

export const Description = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.backgroundImg}></div>
      <div className={styles.descriptionText}>
        <h2 className={styles.title}>Order Food</h2>
        <p className={styles.description}>From 175 Restaurants</p>
      </div>
    </div>
  );
};
