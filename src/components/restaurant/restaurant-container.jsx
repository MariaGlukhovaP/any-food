"use client";

import { useGetRestaurantsQuery } from "../../redux/services/api";
import { Restaurant } from "./restaurant";

export const RestaurantContainer = ({ restaurantId }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === restaurantId),
    }),
  });

  if (!restaurant) return null;

  return <Restaurant name={restaurant.name} id={restaurantId} />;
};
