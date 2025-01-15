import { getRestaurants } from "../../services/get-restaurants";
import { TabLinks } from "./tab-links";

export const TabLinksContainer = async () => {
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return <TabLinks restaurants={restaurants} />;
};
