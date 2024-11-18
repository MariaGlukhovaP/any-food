import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tabs } from "../tabs/tabs";

export const Restaurants = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurants.find(
      (restaurant) => restaurant.id === "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"
    )
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
