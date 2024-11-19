import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";

export const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  if (!name) return null;

  return (
    <div key={id}>
      <h2>{name}</h2>
      {menu.length && <Menu menu={menu} />}
      {reviews.length && <Reviews reviews={reviews} />}
    </div>
  );
};
