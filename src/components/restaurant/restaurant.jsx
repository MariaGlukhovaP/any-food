import { TabLink } from "../tab-link/tab-link";
import styles from "./restaurant.module.css";

export const Restaurant = ({ name, id }) => {
  return (
    <section className={styles.restaurantContainer}>
      <h2 className={styles.restaurantName}>{name}</h2>
      <div className={styles.reataurantTabs}>
        <TabLink href={`/restaurants/${id}/menu`} title="Menu" />
        <TabLink href={`/restaurants/${id}/reviews`} title="Reviews" />
      </div>
    </section>
  );
};
