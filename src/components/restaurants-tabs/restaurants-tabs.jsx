import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import styles from "./restaurants-tabs.module.css";

export const RestaurantsTabs = ({ restaurants }) => {
  return (
    <div className={styles.restaurantsTabsContainer}>
      {restaurants.map(({ id, name }) => (
        <RestaurantTab title={name} id={id} key={id} />
      ))}
    </div>
  );
};
