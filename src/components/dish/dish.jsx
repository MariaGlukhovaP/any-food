import { useAuth } from "../auth-context/use-auth";
import { Card } from "../card/card";
import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ name, ingredients, price }) => {
  const { auth } = useAuth();

  return (
    <Card
      cardTitle={name}
      cardFirstRowItem={ingredients}
      cardSecondRowItem={`${price}$`}
      cardSideItem={auth.isAuthorized && <DishCounter />}
    />
  );
};
