import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ name, price, ingredients }) => {
  if (!name || !price) return null;

  return (
    <li>
      <p>
        <strong>{name}</strong> - ${price}
      </p>
      <div>
        {ingredients.join(", ").charAt(0).toUpperCase() +
          ingredients.join(", ").slice(1)}
      </div>
      <DishCounter />
    </li>
  );
};
