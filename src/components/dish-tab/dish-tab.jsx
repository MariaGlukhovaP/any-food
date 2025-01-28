"use client";

import { Card } from "../card/card";
import { DishCounter } from "../dish-counter/dish-counter";
import { useAuth } from "../auth-context/use-auth";

export const DishTab = ({ name, ingredients, price, dishId }) => {
  const { auth } = useAuth();

  return (
    <Card
      cardTitle={name}
      cardFirstRowItem={ingredients?.join(", ")}
      cardSecondRowItem={`$${price}`}
      cardSideItem={auth.isAuthorized && <DishCounter dishId={dishId} />}
    />
  );
};
