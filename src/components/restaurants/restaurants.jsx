import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tabs } from "../tabs/tabs";

export const Restaurants = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurants.find((restaurant) => restaurant.id === restaurants[0].id)
  );

  const handleTabClick = (id) => {
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    setSelectedRestaurant(restaurant);
  };

  return (
    <>
      <Tabs restaurants={restaurants} onTabClick={handleTabClick} />
      <Restaurant restaurant={selectedRestaurant} />
    </>
  );
};
