import { Outlet } from "react-router-dom";
import styles from "./restaurants-page.module.css";
import { RestaurantsTabsContainer } from "../../components/restaurants-tabs/restaurants-tabs-container";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { PENDING } from "../../redux/UI/request/request-statuses";

export const RestaurantsPage = () => {
  const restaurantsRequestStatus = useRequest(getRestaurants);

  if (restaurantsRequestStatus === PENDING) {
    return "...loading";
  }

  return (
    <div className={styles.restaurantsPage}>
      <RestaurantsTabsContainer />

      <Outlet />
    </div>
  );
};
