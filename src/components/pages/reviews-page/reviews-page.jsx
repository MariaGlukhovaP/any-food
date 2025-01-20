import { Reviews } from "../../reviews/reviews";

export const ReviewsPage = ({ reviews, restaurantId }) => {
  return <Reviews restaurantId={restaurantId} reviews={reviews} />;
};
