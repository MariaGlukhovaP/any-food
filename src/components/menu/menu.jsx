import { CardsContainer } from "../cards-container/cards-container";
import { Cart } from "../cart/cart";
import { DishTab } from "../dish-tab/dish-tab";

import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menuContainer}>
      <CardsContainer>
        {menu.map(({ name, ingredients, price, id }) => (
          <DishTab
            dishId={id}
            name={name}
            ingredients={ingredients}
            price={price}
            key={id}
          />
        ))}
      </CardsContainer>
      <Cart />
    </div>
  );
};
