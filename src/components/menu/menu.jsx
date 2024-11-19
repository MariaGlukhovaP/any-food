import { Dish } from "../dish/dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      {menu.map(({ id, name, price, ingredients }) => (
        <ul key={id}>
          <Dish name={name} price={price} ingredients={ingredients} />
        </ul>
      ))}
    </div>
  );
};
