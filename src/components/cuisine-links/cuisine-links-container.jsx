import { getRestaurants } from "../../services/get-restaurants";
import { CuisineLinks } from "./cuisine-links";

export const СuisineLinksContainer = async () => {
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return <CuisineLinks restaurants={restaurants} />;
};
