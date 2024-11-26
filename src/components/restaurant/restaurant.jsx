import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";

import styles from "./restaurant.module.css";

export const Restaurant = ({ id, name, menu, reviews }) => {
  if (!name) return null;

  return (
    <section className={styles.restaurantContainer} key={id}>
      <h2 className={styles.restaurantName}>{name}</h2>
      <div className={styles.cardsSections}>
        {menu.length && <Menu menu={menu} />}
        {reviews.length && <Reviews reviews={reviews} />}
      </div>
    </section>
  );
};
