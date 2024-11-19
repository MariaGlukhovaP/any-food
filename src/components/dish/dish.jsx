import { Count } from "../count/count";
import { Ingredients } from "../ingredients/ingredients";

export const Dish = ({ name, price, ingredients }) => {
  if (!name || !price) return null;

  return (
    <li>
      <p>
        <strong>{name}</strong> - ${price}
      </p>
      <Ingredients ingredients={ingredients} />
      <Count />
    </li>
  );
};
