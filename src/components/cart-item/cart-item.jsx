import { DishCounter } from "../dish-counter/dish-counter";

import styles from "./cart-item.module.css";

export const CartItem = ({ dish }) => {
  const { name, price, id } = dish;

  return (
    <div className={styles.cartItem}>
      <div>{name}</div>
      <div className={styles.dishInfo}>
        <DishCounter dishId={id} />
        <p className={styles.price}>{`${price}$`}</p>
      </div>
    </div>
  );
};
