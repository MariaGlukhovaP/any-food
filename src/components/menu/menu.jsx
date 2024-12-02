import { DishContainer } from "../dish/dish-container";
import { Subtitle } from "../subtitle/subtitle";
import styles from "./../cards-container/cards-container.module.css";

export const Menu = ({ menu }) => {
  return (
    <section>
      <Subtitle subtitle="Menu" />
      <ul className={styles.cardsContainer}>
        {menu.map((dishId) => (
          <li key={dishId}>
            <DishContainer id={dishId} />
          </li>
        ))}
      </ul>
    </section>
  );
};
