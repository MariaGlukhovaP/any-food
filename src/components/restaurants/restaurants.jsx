import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tabs } from "../tabs/tabs";

export const Restaurants = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurants.find((restaurant) => restaurant.name === "Dishoom")
  );

  const handleTabClick = (name) => {
    const restaurant = restaurants.find(
      (restaurant) => restaurant.name === name
    );
    setSelectedRestaurant(restaurant);
  };

  return (
    <>
      <Tabs restaurants={restaurants} onTabClick={handleTabClick} />
      <Restaurant restaurant={selectedRestaurant} />
    </>
  );
};
