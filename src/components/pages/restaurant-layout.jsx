import { getRestaurant } from "../../services/get-restaurant-by-id";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { Title } from "../title/title";

export const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;

  const restaurant = await getRestaurant(restaurantId);

  return (
    <>
      <RestaurantContainer restaurantId={restaurantId} />
      <Title>{restaurant.name}</Title>
      {children}
    </>
  );
};
