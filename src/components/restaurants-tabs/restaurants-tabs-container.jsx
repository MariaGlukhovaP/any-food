"use client";

import { RestaurantsTabs } from "./restaurants-tabs";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantsTabsContainer = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "...loading";
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }

  return <RestaurantsTabs restaurants={data} />;
};
