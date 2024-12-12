import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Menu } from "./menu";
import { useRequest } from "../../redux/hooks/use-request";

import { PENDING } from "../../redux/UI/request/request-statuses";
import { getDishesByRestaurantId } from "../../redux/entities/dishes/get-dishes-by-restaurant-id";

export const MenuContainer = ({ restaurantId }) => {
  const menuRequestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (menuRequestStatus === PENDING) {
    return "...loading";
  }

  if (!restaurant) {
    return null;
  }

  const { menu } = restaurant;

  return <Menu menu={menu} />;
};
