import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/UI/cart/cart-slice";
import { CartItemContainer } from "../cart-item/cart-item-container";

import styles from "./cart.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      <ul className={styles.cartItems}>
        {items.map(({ id }) => (
          <li key={id}>
            <CartItemContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
