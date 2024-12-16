import { Outlet } from "react-router-dom";
import styles from "./restaurants-page.module.css";
import { RestaurantsTabsContainer } from "../../components/restaurants-tabs/restaurants-tabs-container";
export const RestaurantsPage = () => {
  return (
    <div className={styles.restaurantsPage}>
      <RestaurantsTabsContainer />

      <Outlet />
    </div>
  );
};
