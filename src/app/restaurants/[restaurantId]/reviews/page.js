import { ReviewsPageContainer } from "../../../../components/pages/reviews-page/reviews-page-container";
import { getRestaurant } from "../../../../services/get-restaurant-by-id";

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;

  const { name } = await getRestaurant(restaurantId);

  return { title: `${name} reviews` };
};

export default ReviewsPageContainer;
