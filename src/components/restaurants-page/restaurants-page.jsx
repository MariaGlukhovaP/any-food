import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  };

  return (
    <div className={styles.restaurantsPageContainer}>
      <div className={styles.restaurantsTabsContainer}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            onClick={() => handleSetActiveRestaurantId(id)}
            isActive={id === activeRestaurantId}
          />
        ))}
      </div>

      {activeRestaurantId && (
        <RestaurantContainer key={activeRestaurantId} id={activeRestaurantId} />
      )}
    </div>
  );
};
