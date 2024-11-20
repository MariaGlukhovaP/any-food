import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";

export const Restaurant = ({ id, name, menu, reviews }) => {
  if (!name) return null;

  return (
    <section key={id}>
      <h2>{name}</h2>
      {menu.length && <Menu menu={menu} />}
      {reviews.length && <Reviews reviews={reviews} />}
    </section>
  );
};
