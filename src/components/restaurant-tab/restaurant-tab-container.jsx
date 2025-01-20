import { RestaurantTab } from "./restaurant-tab";
import { getRestaurant } from "../../services/get-restaurant-by-id";

export const RestaurantTabContainer = async ({ id }) => {
  const restaurant = await getRestaurant(id);

  if (!restaurant) {
    return null;
  }

  return <RestaurantTab title={restaurant.name} id={id} />;
};
