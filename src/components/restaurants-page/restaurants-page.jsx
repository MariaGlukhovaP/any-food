import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tab } from "../tab/tab";

import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants[0].id
  );

  const selectedRestaurant = restaurants.find(
    ({ id }) => id === selectedRestaurantId
  );

  const handleSetSelectedRestaurant = (id) => {
    if (selectedRestaurantId === id) {
      return;
    }
    setSelectedRestaurantId(id);
  };

  return (
    <div>
      <div className={styles.restaurantsTabsContainer}>
        {restaurants.map(({ name, id }) => (
          <Tab
            key={id}
            title={name}
            onClick={() => handleSetSelectedRestaurant(id)}
            isActive={id === selectedRestaurantId}
          />
        ))}
      </div>

      {selectedRestaurant && (
        <Restaurant
          id={selectedRestaurant.id}
          name={selectedRestaurant.name}
          menu={selectedRestaurant.menu}
          reviews={selectedRestaurant.reviews}
        />
      )}
    </div>
  );
};
