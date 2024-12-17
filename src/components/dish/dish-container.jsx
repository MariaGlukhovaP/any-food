"use client";

import { Dish } from "./dish";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const DishContainer = ({ dishId }) => {
  const { data } = useGetDishesByRestaurantIdQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === dishId),
    }),
  });

  if (!data) return null;

  const { name, ingredients, price } = data;

  return (
    <Dish name={name} ingredients={ingredients} price={price} dishId={dishId} />
  );
};
