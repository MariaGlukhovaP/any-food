import styles from "./restaurants-page.module.css";
import { RestaurantsTabsContainer } from "../../components/restaurants-tabs/restaurants-tabs-container";

export const RestaurantsLayout = ({ children }) => {
  return (
    <div className={styles.restaurantsPage}>
      <RestaurantsTabsContainer />
      {children}
    </div>
  );
};
