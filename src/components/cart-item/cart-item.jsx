import { DishCounter } from "../dish-counter/dish-counter";

import styles from "./cart-item.module.css";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const CartItem = ({ id }) => {
  const { data } = useGetDishByIdQuery(id);

  if (!data) {
    return null;
  }

  const { name, price } = data;

  return (
    <div className={styles.cartItem}>
      <p>{name}</p>
      <DishCounter dishId={id} />
      <p className={styles.price}>{`${price}$`}</p>
    </div>
  );
};
