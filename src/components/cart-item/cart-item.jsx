import { DishCounter } from "../dish-counter/dish-counter";

import styles from "./cart-item.module.css";

export const CartItem = ({ dish }) => {
  const { name, price, id } = dish;

  return (
    <div className={styles.cartItem}>
      <p>{name}</p>
      <DishCounter dishId={id} />
      <p className={styles.price}>{`${price}$`}</p>
    </div>
  );
};
