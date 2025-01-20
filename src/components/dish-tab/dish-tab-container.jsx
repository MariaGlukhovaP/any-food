import { getDish } from "../../services/get-dish-by-id";
import { DishTab } from "./dish-tab";

export const DishTabContainer = async ({ id }) => {
  const dish = getDish(id);

  const { name, ingredients, price } = dish;

  if (!dish) {
    return null;
  }
  return (
    <DishTab name={name} ingredients={ingredients} price={price} dishId={id} />
  );
};
