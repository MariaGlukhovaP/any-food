import { DishTab } from "../dish-tab/dish-tab";

import styles from "./../cards-container/cards-container.module.css";

export const Menu = ({ menu }) => {
  return (
    <section className={styles.cardsSectionContainer}>
      <ul className={styles.cardsContainer}>
        {menu.map(({ name, id }) => (
          <li key={id}>
            <DishTab dishId={id} name={name} />
          </li>
        ))}
      </ul>
    </section>
  );
};
