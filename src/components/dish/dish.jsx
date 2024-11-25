import { Card } from "../card/card";
import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ name, price, ingredients }) => {
  if (!name || !price) return null;

  return (
    <div>
      <Card
        cardTitle={name}
        cardFirstRowItem={ingredients.join(", ")}
        cardSecondRowItem={`${price}$`}
        cardSideItem={<DishCounter />}
      ></Card>
    </div>
  );
};
