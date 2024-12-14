import { Menu } from "./menu";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId }) => {
  const { data, isLoading } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return "...loading";
  }

  if (!data) {
    return null;
  }

  return <Menu menu={data} />;
};
