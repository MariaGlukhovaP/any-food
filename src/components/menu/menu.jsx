import { Dish } from "../dish/dish";

import styles from "../section/section.module.css";

export const Menu = ({ menu }) => {
  return (
    <section>
      <h3 className={styles.sectionTitle}>Menu</h3>
      <ul className={styles.sectionContainer}>
        {menu.map(({ id, name, price, ingredients }) => (
          <li key={id}>
            <Dish name={name} price={price} ingredients={ingredients} />
          </li>
        ))}
      </ul>
    </section>
  );
};
