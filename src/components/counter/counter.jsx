import styles from "./counter.module.css";

export const Counter = ({ increase, decrease, value }) => {
  return (
    <div className={styles.counterContainer}>
      <button className={styles.counterButton} onClick={increase}>
        +
      </button>
      {value}
      <button className={styles.counterButton} onClick={decrease}>
        -
      </button>
    </div>
  );
};
