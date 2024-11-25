import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>Food Delivery App</h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.backgroundImg}></div>
        <div className={styles.descriptionText}>
          <h1>Order Food</h1>
          <h3>From 175 Restaurants</h3>
        </div>
      </div>
    </header>
  );
};
