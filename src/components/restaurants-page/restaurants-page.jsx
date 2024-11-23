import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tabs } from "../tabs/tabs";

export const RestaurantsPage = ({ title }) => {
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
      <h1>{title}</h1>

      {restaurants.map(({ name, id }) => (
        <Tabs
          key={id}
          title={name}
          onClick={() => handleSetSelectedRestaurant(id)}
          isActive={id === selectedRestaurantId}
        />
      ))}

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
