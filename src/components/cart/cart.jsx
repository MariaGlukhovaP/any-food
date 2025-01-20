"use client";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/UI/cart/cart-slice";
import { CartItemContainer } from "../cart-item/cart-item-container";

import styles from "./cart.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  return (
    <div className={styles.cart}>
      {items.length ? (
        <>
          <h3 className={styles.title}>Cart</h3>
          <ul className={styles.cartItems}>
            {items.map(({ id }) => (
              <li key={id}>
                <CartItemContainer id={id} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3 className={styles.title}>Select a meal from the list</h3>
      )}
    </div>
  );
};
