import { MenuPageContainer } from "../../../../components/pages/menu-page/menu-page-container";
import { getRestaurant } from "../../../../services/get-restaurant-by-id";

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;

  const { name } = await getRestaurant(restaurantId);

  return { title: `${name} menu` };
};

export default MenuPageContainer;
